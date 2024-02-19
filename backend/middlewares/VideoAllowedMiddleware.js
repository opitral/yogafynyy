import UserModel from "../models/UserModel.js";

export default async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.user });

    if (!user.lastGetVideo[req.body.category].datetime) {
      return next();
    }

    const lastGetVideo = new Date(
      user.lastGetVideo[req.body.category].datetime
    );

    if (user.lastGetVideo[req.body.category].count >= 2) {
      const nextDay = new Date(lastGetVideo);
      nextDay.setDate(lastGetVideo.getDate() + 1);
      nextDay.setHours(0, 0, 0, 0);

      if (new Date().getTime() > nextDay.getTime()) {
        user.lastGetVideo[req.body.category].count = 0;
        await user.save();

        return next();
      }

      return res.status(400).json({
        error: "Ви не можете отримати більше двох практик на одну добу",
      });
    }

    lastGetVideo.setHours(lastGetVideo.getHours() + 2);

    if (lastGetVideo > Date.now()) {
      return res.status(400).json({
        error: "Має пройти мінімум 2 години між отриманням практик",
      });
    }
    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Помилка на сервері",
    });
  }
};
