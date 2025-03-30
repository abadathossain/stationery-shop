import { z } from "zod";

// 🟢 Define the Zod validation schema for User
export const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  balance: z
    .number()
    .min(0, { message: "Balance cannot be negative" })
    .default(0),
  role: z
    .enum(["admin", "user"], { message: "Role must be 'admin' or 'user'" })
    .default("user"),
  userStatus: z.enum(["active", "inactive"], {
    message: "User status must be 'active' or 'inactive'",
  }),
});
