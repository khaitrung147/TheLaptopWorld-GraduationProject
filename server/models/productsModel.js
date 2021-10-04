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
        Url: String,
      },
    ],
    KhuyenMai: [
      {
        KhuyenMai: String,
      },
    ],
    LoaiSanPham: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    HangSanXuat: {
      type: mongoose.Schema.Types.ObjectId,
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
        GiaSanPham: Number,
        PhanTramGiamGia: Number,
        SoLuongSanPham: Number,
      },
    ],
  },
  { timestamps: true }
);

export const ProductsModel = mongoose.model("san-pham", schema);
