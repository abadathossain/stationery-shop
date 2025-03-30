import { Request, Response } from "express";
import { AuthServices } from "./auth.service";

const register = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const result = await AuthServices.register(user);

    res.status(200).json({
      success: true,
      message: "Product is created succesfully",
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

export const AuthControllers = {
  register,
};
