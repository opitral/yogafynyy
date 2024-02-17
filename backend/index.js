import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

import CoursesRouter from "./routers/CoursesRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/courses", CoursesRouter);

app.listen(process.env.SERVER_PORT, (error) => {
  if (error) {
    console.error(`Помилка під час запуску сервера: ${error}`);
  } else {
    console.log(`Сервер працює на порту: ${process.env.SERVER_PORT}`);
  }
});
