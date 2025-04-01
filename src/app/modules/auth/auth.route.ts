import express from "express";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "../user/user.validation";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidation.userValidationSchema),
  AuthControllers.register
);
router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.login
);

export const AuthRoutes = router;
