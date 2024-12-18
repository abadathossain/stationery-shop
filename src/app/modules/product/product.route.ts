import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.patch("/:productId", ProductControllers.updateSingleProduct);
router.delete("/:productId", ProductControllers.delteSingleProduct);

export const ProductRoutes = router;
