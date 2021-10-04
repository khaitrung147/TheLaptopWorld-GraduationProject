import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    TenHangSanXuat: {
      type: String,
      required: true,
    },
    Key: {
        type: String,
        required: true,
      },
    HinhDaiDien: {
        type: String,
        required: true,
      },
   
  },
  { timestamps: true }
);

export const ProductCompanyModel = mongoose.model("ProductCompany", schema);