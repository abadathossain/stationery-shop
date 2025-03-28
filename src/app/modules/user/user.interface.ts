export type IUser = {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  userStatus: "active" | "inactive";
};
