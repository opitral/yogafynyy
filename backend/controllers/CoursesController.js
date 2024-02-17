import { validationResult } from "express-validator";
import crypto from "crypto";
import { nanoid } from "nanoid";
import CloudIpsp from "cloudipsp-node-js-sdk";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import getEmailHtml from "../getEmailHtml.js";

import CourseModel from "../models/CourseModel.js";
import UserModel from "../models/UserModel.js";
import PaymentModel from "../models/PaymentModel.js";


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

class CoursesController {
    async getCourses(req, res) {
        try {
            const courses = await CourseModel.find()

            return res.json(courses);

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Помилка під час отримання курсів",
            });
        }
    }

    async getCourse(req, res) {
        try {
            const course = await CourseModel.findOne({_id: req.params.courseId})

            return res.json(course)

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Помилка під час отримання курсу",
            });
        }
    }

    async buyCourse(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: errors.array()[0].msg,
                });
            }

            let user = await UserModel.findOne({
                email: req.body.email,
                phone: req.body.phone
            })

            if (!user) {
                user = await UserModel.create(
                    {
                        email: req.body.email,
                        phone: req.body.phone
                    }
                )
            }

            const course = await CourseModel.findOne(
                {
                    _id: req.params.courseId
                }
            )

            if (!course) {
                return res.status(404).json(
                    {
                        error: "Курс не знайдено"
                    }
                )
            }

            const token = crypto.randomBytes(16).toString("hex");

            await PaymentModel.create(
                {
                    user: user._id,
                    course: course._id,
                    token: token
                }
            )

            const payment = await fondy.Checkout({
                order_id: token,
                order_desc: "Одноразова оплата курсу",
                currency: "UAH",
                amount: course.price * ((100 - course.discount) / 100),
                response_url: `${process.env.BASE_URL}/api/v1/courses/${course._id}/confirm`,
            });

            return res.json({
                message: payment.checkout_url,
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Помилка під час придбання курсу",
            });
        }
    }

    async confirmPayment(req, res){
        try {
            const token = nanoid(6);

            const payment = await PaymentModel.findOneAndUpdate(
                { token: req.body.order_id },
                {
                    $set: {
                        payed: true,
                        key: token
                    },
                }
            );

            if (!payment) {
                return res.status(404).json({
                    error: "Некоректний токен",
                });
            }

            const user = await UserModel.findOne({_id: payment.user})

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
                error: "Помилка під час придбання курсу",
            });
        }
    }
}

export default new CoursesController();
