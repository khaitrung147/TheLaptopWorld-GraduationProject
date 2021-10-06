import mongoose   from "mongoose";

const schema = new mongoose.Schema(
  {   
    MaSanPham: mongoose.Schema.Types.ObjectId,
    MaKhachHang: mongoose.Schema.Types.ObjectId ,
    NongDungBingLuan:String,
    PhanHoi:[
        {
            MaNhanVien:mongoose.Schema.Types.ObjectId,
            MaKhachHang: mongoose.Schema.Types.ObjectId,
            NoiDungTraLoi:String,
            ThoiGian:Timestamp,
        }
    ]
  },
  { timestamps: true }
);

export const commentModel = mongoose.model("Binh-luan-khach-hang", schema);