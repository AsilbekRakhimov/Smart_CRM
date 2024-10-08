import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    _id: true,
    timestamps: true,
    collection: "admins",
  }
);

export const authModel = mongoose.model("admins", adminsSchema);
