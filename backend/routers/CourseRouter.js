import Router from "express";
import { BuyCourseValidation } from "../validations.js";
import CourseController from "../controllers/CourseController.js";

const router = new Router();

router.get("/", CourseController.getCoursePrice); // отримати дані курсу

router.post("/buy", BuyCourseValidation, CourseController.buyCourse); // придбати курс

router.post("/buy/confirm", CourseController.confirmPayment); // підтвердження придбання

export default router;
