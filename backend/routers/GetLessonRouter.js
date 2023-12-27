import Router from "express";
import { GetLessonValidation } from "../validations.js";
import CheckPaymentMiddleware from "../middlewares/CheckPaymentMiddleware.js";
import VideoAllowedMiddleware from "../middlewares/VideoAllowedMiddleware.js";
import GetLessonController from "../controllers/GetLessonController.js";

const router = new Router();

router.post(
  "/",
  GetLessonValidation,
  CheckPaymentMiddleware,
  VideoAllowedMiddleware,
  GetLessonController.practice
);

export default router;
