import express from "express";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "../user/user.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidation.userValidationSchema),
  AuthControllers.register
);

export const AuthRoutes = router;
