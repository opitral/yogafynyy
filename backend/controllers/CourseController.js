import { validationResult } from "express-validator";
import crypto from "crypto";
import { nanoid } from "nanoid";
import CloudIpsp from "cloudipsp-node-js-sdk";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

import UserModel from "../models/UserModel.js";
import getEmailHtml from "../getEmailHtml.js";

dotenv.config();

const fondy = new CloudIpsp({
  merchantId: process.env.MERCHANT_ID,
  secretKey: process.env.SECRET_KEY,
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

class CourseController {
  async getCoursePrice(req, res) {
    try {
      return res.json({
        price: +process.env.COURSE_PRICE,
        discount: +process.env.COURSE_DISCOUNT,
        new_price:
          process.env.COURSE_PRICE *
          ((100 - process.env.COURSE_DISCOUNT) / 100),
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час отримання ціни",
      });
    }
  }

  async buyCourse(req, res) {
    try {
      const errors = validationResult(req);

      console.log(errors);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: errors.array()[0].msg,
        });
      }

      const paymentToken = crypto.randomBytes(16).toString("hex");

      await UserModel.create({
        email: req.body.email,
        phone: req.body.phone,
        paymentToken: paymentToken,
      });

      const result = await fondy.Checkout({
        order_id: paymentToken,
        order_desc: "Одноразова оплата курсу",
        currency: "UAH",
        amount:
          process.env.COURSE_PRICE *
          ((100 - process.env.COURSE_DISCOUNT) / 100),
        response_url: `${process.env.LENDING_URL}confirm`,
      });

      return res.json({
        message: result.checkout_url,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час придбання практики",
      });
    }
  }

  async confirmPayment(req, res) {
    try {
      const token = nanoid(6);

      const user = await UserModel.findOneAndUpdate(
        { paymentToken: req.body.order_id },
        {
          $set: {
            botToken: token,
            paid: Date.now(),
            paymentToken: "",
          },
        }
      );

      if (!user) {
        return res.status(404).json({
          error: "Некоректний токен",
        });
      }

      await transporter.sendMail({
        from: {
          name: "YogaFaynyy",
          address: process.env.SMTP_USER,
        },
        to: user.email,
        subject: "Дякуємо за придбання курсу",
        html: getEmailHtml(token),
      });

      return res.json({
        message: `${process.env.TELEGRAM_BOT_LINK}?start=${token}`,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час придбання практики",
      });
    }
  }
}

export default new CourseController();
