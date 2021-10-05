import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    TenKhachHang: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Avatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

export const CustomersModel = mongoose.model("tai-khoan-khach-hang", schema);
