import UserModel from "../models/UserModel.js";

export default async (req, res, next) => {
  try {
    const userTelegramId = req.body.user;

    const user = await UserModel.findOne({ telegramId: userTelegramId });

    if (!user) {
      return res.status(403).json({
        error: "У користувача немає доступу",
      });
    }

    req.user = user._id;
    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Помилка на сервері",
    });
  }
};
