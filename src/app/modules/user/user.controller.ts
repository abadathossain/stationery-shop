import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const result = await UserServices.createUserIntoDB(user);

    res.status(200).json({
      success: true,
      message: "User is created succesfully",
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
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      status: true,
      message: "Users retrieved successfully",
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
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const result = await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
      status: true,
      message: "Single User retrieved successfully",
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
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updateData = req.body;

    const result = await UserServices.updateUserDB(userId, updateData);
    if (!result) {
      res.status(404).json({
        status: false,
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      status: true,
      message: "User is updated successfully",
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
const delteSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserServices.deleteSingleUserFromDB(userId);

    res.status(200).json({
      status: true,
      message: "Single User delete successfully",
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

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  delteSingleUser,
};
