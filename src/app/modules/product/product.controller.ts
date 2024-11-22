import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    // const { product: productData } = req.body;
    const product = req.body;

    const result = await ProductServices.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: "Product is created succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    // res.status(500).json({
    //   success: false,
    //   message: "Something went wrong",
    //   error: err,
    // });
  }
};

export const ProductControllers = {
  createProduct,
};
