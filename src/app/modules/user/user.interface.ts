export type IUser = {
  name: string;
  email: string;
  password: string;
  balance: number;
  role: "user" | "admin";
  userStatus: "active" | "inactive";
};
