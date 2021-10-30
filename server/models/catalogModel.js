import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    TenLoaiSanPham: {
      type: String,
      required: true,
    },
    DanhMuc: {
      type: Number,
      required: true,
    },
    Key: {
      type: String,
      required: true,
    },
    HangSanXuat: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    AnHien: {
      type: Boolean,
      default: true,
      required: true,
    },
    ThuTuSapXep: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false }
);

export const CatalogModel = mongoose.model("loai-san-pham", schema);
