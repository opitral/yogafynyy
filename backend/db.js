import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.0eptxwt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("База даних підключена");
});

db.on("error", (error) => {
  console.error(`Помилка під час підключення бази даних: ${error}`);
});

export default db;
