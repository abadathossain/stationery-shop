/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { userSchema } from "./user.validation";

const createUser: RequestHandler = catchAsync(async (req, res, next) => {
  const user = req.body;
  const zodData = userSchema.parse(user);
  const result = await UserServices.createUserIntoDB(zodData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "User is created succesfully",
    data: result,
  });
});
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User is read succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;

    const result = await UserServices.getSingleUserFromDB(userId);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User is single read succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User is updated succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const delteSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;
    await UserServices.deleteSingleUserFromDB(userId);

    res.status(200).json({
      status: true,
      message: "Single User delete successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  delteSingleUser,
};
