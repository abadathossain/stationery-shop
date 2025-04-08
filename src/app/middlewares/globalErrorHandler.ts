/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
type TErrorResponse = {
  success: boolean;
  message: string;
  error: any;
};

const globalErrorHandler = (
  err: TErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
      error: err,
    });
  }

  // const statusCode = 500;
  // const message = err.message || "Something went wrong!";

  // return void res.status(statusCode).json({
  //   success: false,
  //   message,
  //   error: err,
  // });
};

export default globalErrorHandler;
