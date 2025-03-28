import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/orders", OrderControllers.createOrder);
router.get("/orders", OrderControllers.getAllOrders);
router.get("/revenue", OrderControllers.getRevenue);

export const OrderRoutes = router;
