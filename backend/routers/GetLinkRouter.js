import Router from "express";
import { GetLinkValidation } from "../validations.js";
import CheckPaymentMiddleware from "../middlewares/CheckPaymentMiddleware.js";
import GetLinkController from "../controllers/GetLinkController.js";

const router = new Router();

router.post(
  "/chat",
  GetLinkValidation,
  CheckPaymentMiddleware,
  GetLinkController.chat
);

router.post(
  "/instagram",
  GetLinkValidation,
  CheckPaymentMiddleware,
  GetLinkController.instagram
);
router.get("/support", GetLinkController.support);
router.get("/lending", GetLinkController.lending);

export default router;
