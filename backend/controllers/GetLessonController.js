import { validationResult } from "express-validator";
import dotenv from "dotenv";

import UserModel from "../models/UserModel.js";
import VideoModel from "../models/VideoModel.js";

dotenv.config();

class GetLessonController {
  async practice(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: errors.array()[0].msg,
        });
      }

      const user = await UserModel.findOne({ _id: req.user });

      const videos = await VideoModel.find({
        _id: { $ne: user.lastGetVideo[req.body.category].video?.toString() },
        category: req.body.category,
        mood: req.body.mood,
      });

      if (!videos.length) {
        return res.status(404).json({
          error: "Практику не знайдено",
        });
      }

      const randomVideoIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos[randomVideoIndex];

      user.lastGetVideo[req.body.category].video = randomVideo._id;
      user.lastGetVideo[req.body.category].datetime = Date.now();
      user.lastGetVideo[req.body.category].count += 1;
      user.save();

      return res.json({
        message: {
          file_id: randomVideo.fileId,
          caption: randomVideo.caption,
          category: randomVideo.category,
          mood: randomVideo.mood,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Помилка під час отримання практики",
      });
    }
  }
}

export default new GetLessonController();
