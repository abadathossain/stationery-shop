import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductControllers.createProduct);
router.get("/products", ProductControllers.getAllProducts);
router.get("/product/:productId", ProductControllers.getSingleProduct);
router.patch("/product/:productId", ProductControllers.updateSingleProduct);
router.delete("/product/:productId", ProductControllers.delteSingleProduct);

export const ProductRoutes = router;
