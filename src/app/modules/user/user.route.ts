import express from "express";
import { UserControllers } from "./user.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/create-user", UserControllers.createUser);
router.get("/users", auth("admin"), UserControllers.getAllUsers);
router.get("/user/:userId", UserControllers.getSingleUser);
router.patch("/user/:userId", UserControllers.updateSingleUser);
router.delete("/user/:userId", UserControllers.delteSingleUser);

export const UserRoutes = router;
