import { Router } from "express";
import { ValidationMiddleware } from "../../middlewares/validation.middleware.js";
import { logInSchema } from "./dtos/log-in.dto.js";
import authController from "./auth.controller.js";

const router = Router();

router.post(
  "/log-in",
  [ValidationMiddleware(logInSchema)],
  authController.logIn
);

export default router;
