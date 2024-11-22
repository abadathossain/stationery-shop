import { Schema, model } from "mongoose";
import { Order } from "./order.interface";

const ProductSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, "Invalid email format"],
    },
    product: {
      type: String,
      ref: "ProductId",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model<Order>("Order", ProductSchema);
