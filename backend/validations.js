import { body } from "express-validator";

export const BuyCourseValidation = [
  body("email", "Некоректна адреса електронної пошти").isEmail(),
  body("phone", "Некоректний номер телефону").matches(/^\d{10}$/),
];

export const GetLessonValidation = [
  body("user", "Некоректний ідентифікатор telegram акаунта").matches(
    /^\d{10}$/
  ),
  body("category", "Некоректна категорія").isIn([
    "yoga",
    "breath",
    "meditation",
  ]),
  body("mood", "Некоректна оцінка стану").matches(/^[12]$/),
];

export const GetLinkValidation = [
  body("user", "Некоректний ідентифікатор telegram акаунта").matches(
    /^\d{10}$/
  ),
];

export const CheckUserValidation = [
  body("user", "Некоректний ідентифікатор telegram акаунта").matches(
    /^\d{10}$/
  ),
  body("token", "Некоректний токен").matches(/^$|^[a-zA-Z0-9_-]{6}$/),
];
