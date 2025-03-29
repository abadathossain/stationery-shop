/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";
import { ProductModel } from "../product/product.model";

// const createOrderIntoDB = async (order: Order) => {
//   const result = await OrderModel.create(order, {
//     $multiply: ["$totalPrice", "$quantity"],
//   });
//   return result;
// };

// const createOrderIntoDB = async (order: Order) => {
//   order.totalPrice = order.unitPrice * order.quantity;
//   const result = await OrderModel.create(order);
//   return result;
// };

const createOrderIntoDB = async (orderData: Order) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // Create order
    orderData.totalPrice = orderData.quantity * orderData.unitPrice;
    const order = await OrderModel.create([orderData], { session });
    if (!order) {
      throw new Error("Failed to create order");
    }

    // Fetch product and check stock
    const product = await ProductModel.findByIdAndUpdate(orderData.productId);
    if (!product || product.inStock < orderData.quantity) {
      throw new Error(product ? "Insufficient stock" : "Product not found");
    }

    // Deduct stock and save
    product.inStock = product.inStock - orderData.quantity;
    await product.save({ session });

    await session.commitTransaction();
    session.endSession();

    return { order, updatedStock: product.inStock };
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    throw new Error(`Transaction failed: ${error.message}`);
  }
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

// using aggregate for calculated revenue

const calculateTotalRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $project: {
        _id: 1,
        product: 1,
        quantity: 1,
        totalPrice: 1,
        calculatedRevenue: {
          $multiply: ["$totalPrice", "$quantity"],
        },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: "$calculatedRevenue",
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  calculateTotalRevenue,
};
