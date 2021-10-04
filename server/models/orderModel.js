import mongoose   from "mongoose";

const schema = new mongoose.Schema(
  {
    SanPham:[
        {
            MaSanPham: mongoose.Schema.Types.ObjectId,
            CauHinh:mongoose.Schema.Types.ObjectId,
            SoLuong:Number,
            GiaTien:Number,
        },
    ],
    MaKhachHang: mongoose.Schema.Types.ObjectId ,
    TrangThai:Number,
    NhanVienXacNhan:mongoose.Schema.Types.ObjectId ,
    NhanVienGiaoHang: mongoose.Schema.Types.ObjectId ,
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("Don-hang", schema);