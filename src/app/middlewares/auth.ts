import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../modules/user/user.model";
const auth = (requiredRole: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("Token is not provided");
      }
      const decoded = jwt.verify(token, "secret") as jwt.JwtPayload;
      const { email, role } = decoded;
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      if (requiredRole !== role) {
        throw new Error("You are not authorized");
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
export default auth;
