import { IUser } from "../user/user.interface";
import { UserModel } from "../user/user.model";

const register = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};

export const AuthServices = {
  register,
};
