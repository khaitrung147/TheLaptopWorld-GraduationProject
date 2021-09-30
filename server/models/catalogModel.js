import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    TenLoaiSanPham: {
      type: String,
      required: true,
    },
    TenDanhMuc: {
      type: String,
      required: true,
    },
    Key: {
      type: String,
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

export const CatalogModel = mongoose.model("catalog", schema);
