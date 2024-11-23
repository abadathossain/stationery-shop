import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await OrderServices.createOrderIntoDB(order);

    res.status(200).json({
      status: true,
      message: "Order is created succesfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderFromDB();

    res.status(200).json({
      status: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.calculateTotalRevenue();

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (err) {
    // res.status(500).json({
    //   message: "Something went wrong",
    //   status: false,
    //   error: err.message,
    // });
    console.log(err);
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getRevenue,
};
