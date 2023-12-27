import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import CourseRouter from "./routers/CourseRouter.js";
import GetLessonRouter from "./routers/GetLessonRouter.js";
import GetLinkRouter from "./routers/GetLinkRouter.js";
import CheckUserRouter from "./routers/CheckUserRouter.js";

import db from "./db.js";

dotenv.config();

const app = express();

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/course", CourseRouter); // курс
app.use("/api/v1/getLesson", GetLessonRouter); // уроки
app.use("/api/v1/getLink", GetLinkRouter); // посилання
app.use("/api/v1/checkUser", CheckUserRouter); // перевірка користувача

app.listen(process.env.SERVER_PORT, (error) => {
  if (error) {
    console.error(`Помилка під час запуску сервера: ${error}`);
  } else {
    console.log(`Сервер працює на порту: ${process.env.SERVER_PORT}`);
  }
});
