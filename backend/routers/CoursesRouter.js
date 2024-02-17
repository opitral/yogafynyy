import Router from "express";
import { BuyCourseValidation } from "../validations/CoursesValidation.js";
import CoursesController from "../controllers/CoursesController.js";

const router = new Router();

router.get("/", CoursesController.getCourses);
router.get("/:courseId", CoursesController.getCourse); // придбати курс
router.post("/:courseId/buy", BuyCourseValidation, CoursesController.buyCourse); // підтвердження придбання
router.post("/:courseId/confirm", CoursesController.confirmPayment);

export default router;
