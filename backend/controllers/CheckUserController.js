import { validationResult } from "express-validator";

import UserModel from "../models/UserModel.js";

class CheckUserController {
  async checkUser(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: errors.array()[0].msg,
        });
      }

      if (req.body.token !== "") {
        await UserModel.findOneAndUpdate(
            { botToken: req.body.token },
            { $set: { botToken: "", telegramId: req.body.user } }
        );
      }

      const user = await UserModel.findOne({
        telegramId: req.body.user,
      });

      if (!user) {
        return res.status(403).json({
          error: "У користувача немає доступу",
        });
      } else {
        return res.json({
          message: "У користувача є доступ",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час перевірки користувача",
      });
    }
  }
}

export default new CheckUserController();
