import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    MaSanPham: mongoose.Schema.Types.ObjectId,
    MaKhachHang: mongoose.Schema.Types.ObjectId,
    NoiDungBinhLuan: String,
    PhanHoi: [
      {
        MaNhanVien: mongoose.Schema.Types.ObjectId,
        MaKhachHang: mongoose.Schema.Types.ObjectId,
        NoiDungTraLoi: String,
        ThoiGian: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export const commentModel = mongoose.model("Binh-luan-khach-hang", schema);
