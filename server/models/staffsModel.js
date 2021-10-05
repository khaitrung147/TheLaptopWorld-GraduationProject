import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    TenNhanVien: {
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
    PhanQuyen: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

export const StaffModel = mongoose.model("tai-khoan-nhan-vien", schema);
