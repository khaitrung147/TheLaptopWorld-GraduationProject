import React, { useEffect, useState } from "react";

const ProductConfig = (props) => {
  const [saleprice, setSalePrice] = useState([]);
  const [config, setConfig] = useState([]);
  useEffect(() => {
    setConfig(props.data.CauHinhSanPham[0]);
    setSalePrice(
      (
        ((100 - config.PhanTramGiamGia) / 100) *
        config.GiaSanPham
      ).toLocaleString("vi-vn")
    );
  }, [props.data.CauHinhSanPham, config]);

  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold">{props.data.TenSanPham}</h1>
            <h4 className="text-info">
              {config.PhanTramGiamGia == 0 ? (
                <b>VNĐ {saleprice} </b>
              ) : (
                <b>
                  VNĐ {saleprice}{" "}
                  <del className="ms-4 text-dark">
                    <small>VNĐ {config.GiaSanPham}</small>
                  </del>
                </b>
              )}
            </h4>
            <p className="mt-4">
              5 <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <b className="text-decoration-underline ms-2">7 đánh giá</b>
              <b className="text-decoration-underline ms-2">
                {" "}
                16 bình luận
              </b>{" "}
            </p>

            <p>
              <b>Thương hiệu:</b> {props.data.HangSanXuat}
            </p>
            <p>
              {" "}
              <b>Vi xử lý:</b> {config.ViXuLy}
            </p>
            <p>
              <b>Màn hình:</b> {config.ManHinh}
            </p>
            <p>
              <b>Độ phủ màu:</b> {config.Mau}
            </p>
            <p>
              <b>RAM:</b> {config.BoNho}
            </p>
            <p>
              <b>Lưu trữ:</b> {config.LuuTru}
            </p>
            <p>
              <b>Pin:</b> {config.Pin}
            </p>
            <p>
              <b>Kết nối chính:</b> {config.KetNoiChinh}
            </p>
            <p>
              <b>Cân nặng:</b> {config.CanNang}
            </p>
            <p>
              <b>Hệ điều hành:</b> {config.HeDieuHanh}
            </p>
            <p>
              <b>Được giảm:</b> {config.PhanTramGiamGia}%
            </p>
            <p>
              <b>Số lượng còn lại:</b> {config.SoLuongSanPham}
            </p>
          </div>

          <div className="mt-5">
            <div className="card p-3  ">
              {props.data.KhuyenMai.map((e) => (
                <p className="text-danger">
                  <i class="fas fa-gifts me-3"></i>
                  {e.KhuyenMai === ""
                    ? "Sản phẩm hiện chưa có khuyến mãi !!!"
                    : e.KhuyenMai}
                </p>
              ))}
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="p-2 rounded-pill cart-btn fw-bold w-25 "
              >
                {" "}
                <i className="fas fa-shopping-cart me-2"></i>Thêm vào giỏ
              </button>
              <button
                type="submit"
                className="p-2 rounded-pill love-btn fw-bold w-25 ms-3"
              >
                {" "}
                <i className="far fa-heart me-2"></i>Yêu thích
              </button>
            </div>
            <p className="mt-5">
              Hotline<b>: 0123456789</b>
            </p>
            <div className="card p-3 mt-3">
              Bảo hành
              <li>
                Bảo hành <b>12 tháng tại TGLT</b>
              </li>
              <li>
                Đổi mới <b>trong 15 ngày đầu tiên</b>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-white mt-5">
        <div className="mt-2">
          <div className="row">
            <h2 className="fw-bold">Các cấu hình tùy chọn</h2>

            {props.data.CauHinhSanPham.map((e) => (
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="card bg-light p-2 mt-1 form-check" for="">
                  <div className="d-flex align-items-center">
                    <input type="checkbox" id="" />
                    <b className="ms-2 text-info">-{e.PhanTramGiamGia}%</b>
                  </div>
                  <p className="mt-5">
                    {e.CanNang} , {e.ViXuLy} , {e.ManHinh} , {e.Mau} , {e.BoNho}{" "}
                    , {e.LuuTru} , {e.Pin}
                  </p>
                  <div
                    className="position-absolute top-0 p-1 "
                    style={{ right: "45%" }}
                  >
                    {e.SoLuongSanPham == 0 ? (
                      <p className="fw-bold">Tạm hết hàng !</p>
                    ) : (
                      <p className="fw-bold">Số lượng: {e.SoLuongSanPham}</p>
                    )}
                  </div>
                  <div className="position-absolute end-0 top-0 p-1">
                    {e.PhanTramGiamGia == 0 ? (
                      <>
                        <p className="text-info">
                          <b>
                            VNĐ{" "}
                            {(
                              ((100 - e.PhanTramGiamGia) / 100) *
                              e.GiaSanPham
                            ).toLocaleString("vi-vn")}
                          </b>{" "}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-info">
                          <b>
                            VNĐ{" "}
                            {(
                              ((100 - e.PhanTramGiamGia) / 100) *
                              e.GiaSanPham
                            ).toLocaleString("vi-vn")}
                          </b>{" "}
                        </p>
                        <del>
                          <b>VNĐ {e.GiaSanPham.toLocaleString("vi-vn")}</b>{" "}
                        </del>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h6 className="mt-3">{props.data.MoTa}</h6>
        </div>
      </div>
    </>
  );
};
export default ProductConfig;
