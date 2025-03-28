// const mongoose = require('mongoose');
import { Schema, model } from "mongoose";
import { Product } from "./product.interface";

const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Writing",
        "Office Supplies",
        "Art Supplies",
        "Educational",
        "Technology",
      ],
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ProductModel = model<Product>("Products", ProductSchema);
