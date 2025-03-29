import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: "{VALUE} is not a valid email",
      },
      immutable: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true,
    },
    userStatus: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// pre hook
UserSchema.pre("find", function (this, next) {
  this.find({ userStatus: { $eq: "active" } });
  next();
});

// hook -> post
UserSchema.post("find", function (docs, next) {
  docs.forEach((doc: IUser) => {
    doc.name = doc.name.toLowerCase();
  });
  next();
});

export const UserModel = model<IUser>("User", UserSchema);
