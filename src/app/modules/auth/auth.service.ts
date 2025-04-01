import { IUser } from "../user/user.interface";
import { UserModel } from "../user/user.model";
import { TLogin } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};
const login = async (payload: TLogin) => {
  const user = await UserModel.findOne({ email: payload?.email }).select(
    "+password"
  );

  if (!user) {
    throw new Error("User not found");
  }

  const userStatus = user?.userStatus;

  if (userStatus === "inactive") {
    throw new Error("User is inactive");
  }
  const isPasswordMatch = await bcrypt.compare(
    payload?.password,
    user?.password
  );
  if (!isPasswordMatch) {
    throw new Error("Password is incorrect");
  }

  const token = jwt.sign({ email: user?.email, role: user?.role }, "secret", {
    expiresIn: "1d",
  });

  return { token, user };
};

export const AuthServices = {
  register,
  login,
};
