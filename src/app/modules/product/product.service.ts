import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProductsFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateProductDB = async (
  _id: string,
  updateData: Partial<Product>
): Promise<Product | null> => {
  const result = await ProductModel.findOneAndUpdate({ _id }, updateData);
  return result;
};
const deleteSingleProductsFromDB = async (
  _id: string
): Promise<Product | null> => {
  const result = await ProductModel.findOneAndDelete({ _id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  updateProductDB,
  deleteSingleProductsFromDB,
};
