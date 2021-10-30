import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    MaSanPham: String,
    MaKhachHang: mongoose.Schema.Types.ObjectId,
    MaDonHang: mongoose.Schema.Types.ObjectId,
    Rate: Number,
    NoiDungDanhGia: String,
  },
  { timestamps: true }
);

export const RatesModel = mongoose.model("Danh-gia", schema);
