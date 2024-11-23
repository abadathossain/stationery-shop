import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
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
