import { validationResult } from "express-validator";
import dotenv from "dotenv";

dotenv.config();

class GetLinkController {
  async chat(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: errors.array()[0].msg,
        });
      }

      return res.json({
        message: process.env.TELEGRAM_CHAT_LINK,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час отримання посилання на чат",
      });
    }
  }

  async support(req, res) {
    try {
      return res.json({
        message: process.env.TELEGRAM_SUPPORT_LINK,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час отримання посилання на підтримку",
      });
    }
  }

  async instagram(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: errors.array()[0].msg,
        });
      }

      return res.json({
        message: process.env.INSTAGRAM_LINK,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час отримання посилання на Instagram",
      });
    }
  }

  async lending(req, res) {
    try {
      return res.json({
        message: process.env.LENDING_URL,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час отримання посилання на лендінг",
      });
    }
  }
}

export default new GetLinkController();
