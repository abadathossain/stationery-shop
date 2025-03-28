import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserControllers.createUser);
router.get("/users", UserControllers.getAllUsers);
router.get("/user/:userId", UserControllers.getSingleUser);
router.patch("/user/:userId", UserControllers.updateSingleUser);
router.delete("/user/:userId", UserControllers.delteSingleUser);

export const UserRoutes = router;
