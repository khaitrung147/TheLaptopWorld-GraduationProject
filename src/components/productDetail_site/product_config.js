/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Modal, Button, Space } from "antd";
import { getListProductCompany } from "../../redux/actions/productCompany";
import { useDispatch, useSelector } from "react-redux";
const ProductConfig = (props) => {
  const [saleprice, setSalePrice] = useState([]);
  const [config, setConfig] = useState([]);
  const dispatch = useDispatch();

  const { productCompany } = useSelector((state) => state.productCompany);

  useEffect(() => {
    dispatch(getListProductCompany());
  }, [dispatch]);

  useEffect(() => {
    setConfig(props.data.CauHinhSanPham[0]);
    setSalePrice(
      (
        ((100 - config.PhanTramGiamGia) / 100) *
        config.GiaSanPham
      ).toLocaleString("vi-vn")
    );
    Checked();
  }, [props.data.CauHinhSanPham, config]);

  const Checked = () => {
    var input = document.getElementsByName("myCheckbox");
    input[0].checked = true;
  };

  const AddCart = (e) => {
    var value = document.querySelector("input[type=radio]:checked");
    if (value.checked == true) {
      if (value.value === "disabled") {
        Modal.warning({
          title: "Lưu ý",
          content: "Cấu hình tạm hết hàng, vui lòng chọn cấu hình khác",
        });
      } else {
        let cart = [];
        if (localStorage.cart) {
          cart = JSON.parse(localStorage.cart);
          let cartFilter = cart.filter(
            (e) => e.productKey === props.data.Key && e.CauHinh === value.id
          );
          console.log("cartFilter :>> ", cartFilter);
          if (cartFilter[0]) {
            cart = [
              ...cart.filter(
                (e) => e.productKey !== props.data.Key && e.CauHinh !== value.id
              ),
              {
                productKey: cartFilter[0].productKey,
                CauHinh: cartFilter[0].CauHinh,
                SoLuong: cartFilter[0].SoLuong + 1,
              },
            ];
          } else {
            cart = [
              ...cart,
              {
                productKey: props.data.Key,
                CauHinh: value.id,
                SoLuong: 1,
              },
            ];
          }
          localStorage.cart = JSON.stringify(cart);
        } else {
          localStorage.cart = JSON.stringify([
            {
              productKey: props.data.Key,
              CauHinh: value.id,
              SoLuong: 1,
            },
          ]);
        }
        console.log("value.id :>> ", value.id);
        Modal.success({
          content: "Thêm vào giỏ hàng thành công !",
        });
      }
    } else {
      Modal.warning({
        title: "Lưu ý",
        content: "Vui lòng chọn 1 cấu hình",
      });
    }
  };

  if (localStorage.thelaptopworld_token) {
    var token = JSON.parse(localStorage.thelaptopworld_token);
  }
  return (
    <>
      <div
        className="col-xl-6 col-lg-6 col-md-12 col-sm-12 "
        key={props.data._id}
      >
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold">{props.data.TenSanPham}</h2>
            <h5 className="text-info">
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
            </h5>
            <p className="mt-5">
              <b>Thương hiệu:</b>{" "}
              {productCompany
                ? (productCompany || []).map((e) =>
                    e._id === props.data.HangSanXuat ? e.TenHangSanXuat : null
                  )
                : null}
            </p>
            <p>
              {" "}
              <b>Vi xử lý:</b> {config.ViXuLy}
            </p>
            <p>
              <b>Màn hình:</b> {config.ManHinh}
            </p>
            <p>
              <b>Màu:</b> {config.Mau}
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
            <div className="card p-3">
              {props.data.KhuyenMai.map((e) => (
                <p className="custom fw-bold">
                  <i class="fas fa-gifts me-3"></i>
                  {e.KhuyenMai === ""
                    ? "Sản phẩm hiện chưa có khuyến mãi !!!"
                    : e.KhuyenMai}
                </p>
              ))}
            </div>
            <div className="mt-5">
              {token ? (
                token.role ? (
                  <>
                    {" "}
                    <button
                      type="submit"
                      className="p-2 rounded-pill cart-btn fw-bold  "
                      disabled
                      style={{ cursor: "no-drop" }}
                    >
                      {" "}
                      <i className="fas fa-shopping-cart me-2"></i>Thêm vào giỏ
                    </button>
                   
                  </>
                ) : (
                  <>
                    {" "}
                    <button
                      type="submit"
                      className="p-2 rounded-pill cart-btn fw-bold  "
                      onClick={() => AddCart()}
                    >
                      {" "}
                      <i className="fas fa-shopping-cart me-2"></i>Thêm vào giỏ
                    </button>
                    
                  </>
                )
              ) : (
                <>
                  {" "}
                  <button
                    type="submit"
                    className="p-2 rounded-pill cart-btn fw-bold  "
                    onClick={() => AddCart()}
                  >
                    {" "}
                    <i className="fas fa-shopping-cart me-2"></i>Thêm vào giỏ
                  </button>
                 
                </>
              )}
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
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
                key={e._id}
              >
                <label
                  className="position-relative rounded-3 p-2 mt-1 form-check configs"
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex align-items-center">
                    {e.SoLuongSanPham == 0 ? (
                      <div className="checklist">
                        <input
                          type="radio"
                          id=""
                          name="myCheckbox"
                          value={"disabled"}
                        />
                        <label className="checkmark">
                          {" "}
                          <i class="fas fa-check "></i>
                        </label>
                      </div>
                    ) : (
                      <div className="checklist">
                        <input
                          type="radio"
                          className=""
                          id={e._id}
                          value={e.PhanTramGiamGia}
                          name="myCheckbox"
                        />
                        <label className="checkmark ">
                          <i class="fas fa-check "></i>
                        </label>
                      </div>
                    )}
                    <b className="ms-2 text-info">-{e.PhanTramGiamGia}%</b>
                  </div>
                  <p className="mt-5 ch">
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
                        <p className="text-info fw-bold">
                          VNĐ{" "}
                          {(
                            ((100 - e.PhanTramGiamGia) / 100) *
                            e.GiaSanPham
                          ).toLocaleString("vi-vn")}{" "}
                        </p>
                        <del>VNĐ {e.GiaSanPham.toLocaleString("vi-vn")}</del>
                      </>
                    )}
                  </div>
                </label>
              </div>
            ))}
          </div>

          <p className="mt-3 mb-3" style={{ fontSize: "1.1rem" }}>
            {props.data.MoTa}
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductConfig;
