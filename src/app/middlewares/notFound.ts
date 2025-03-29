/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return void res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Route not found",
    error: "",
  });
};
export default notFound;
