import { body } from "express-validator";

export const BuyCourseValidation = [
    body("email", "Некоректна адреса електронної пошти").isEmail(),
    body("phone", "Некоректний номер телефону").matches(/^\d{10}$/),
];
