import Router from "express";
import { CheckUserValidation } from "../validations.js";
import CheckUserController from "../controllers/CheckUserController.js";

const router = new Router();

router.post("/", CheckUserValidation, CheckUserController.checkUser); // перевірити користувача

export default router;
