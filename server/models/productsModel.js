import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    TenSanPham: {
      type: String,
      required: true,
    },
    Key: {
      type: String,
      required: true,
    },
    MoTa: {
      type: String,
      require: true,
    },
    HinhAnh: [
      {
        img: String,
      },
    ],
    KhuyenMai: [
      {
        sale: String,
      },
    ],
    LoaiSanPham: {
      type: String,
      required: true,
    },
    HangSanXuat: {
      type: String,
      required: true,
    },
    CauHinhSanPham: [
      {
        CanNang: String,
        HeDieuHanh: String,
        LuuTru: String,
        Mau: String,
        ViXuLy: String,
        BoNho: String,
        ManHinh: String,
        KetNoiChinh: String,
        Pin: String,
        GiaGoc: Number,
        GiaSanPham: Number,
        PhanTramGiamGia: Number,
        SoLuongSanPham: Number,
      },
    ],
  },
  { timestamps: true }
);

export const ProductsModel = mongoose.model("products", schema);
