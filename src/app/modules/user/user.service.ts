import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};
const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (_id: string) => {
  const result = await UserModel.findOne({ _id });
  return result;
};

const updateUserDB = async (
  _id: string,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  const result = await UserModel.findOneAndUpdate({ _id }, updateData, {
    new: true,
  });
  return result;
};
const deleteSingleUserFromDB = async (_id: string): Promise<IUser | null> => {
  const result = await UserModel.findOneAndDelete({ _id });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserDB,
  deleteSingleUserFromDB,
};
