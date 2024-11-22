import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create({
    ...product,
    createAt: new Date().toLocaleString(),
    updateAt: new Date().toLocaleString(),
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
