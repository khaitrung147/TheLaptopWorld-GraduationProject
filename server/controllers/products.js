import { ProductsModel } from "../models/productsModel.js";

const getProducts = async (req, res) => {
  try {
    // const create = new ProductsModel({
    //   TenSanPham: "test",
    //   Key: "test-ing",
    //   MoTa: "test",
    //   HinhAnh: [
    //     {
    //       img: "test",
    //     },
    //   ],
    //   LoaiSanPham: "test",
    //   HangSanXuat: "test",
    //   CauHinhSanPham: [
    //     {
    //       CanNang: "1kg",
    //       HeDieuHanh: "Window",
    //       LuuTru: "1tb",
    //       Mau: "Black",
    //       ViXuLy: "i9-1000k",
    //       BoNho: "8gb",
    //       ManHinh: "F-HD",
    //       KetNoiChinh: "USB , LAN ,Type C",
    //       Pin: "1000000m",
    //       GiaGoc: 100000,
    //       GiaSanPham: 80000,
    //       PhanTramGiamGia: 20,
    //       SoLuongSanPham: 40,
    //     },
    //   ],
    // });

    const products = await ProductsModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createProduct = (req, res) => {
  res.send("Create product successfuly");
};

export { getProducts, createProduct };
