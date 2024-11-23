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

const calculateTotalRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: "$totalPrice",
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalPrice: 1,
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
