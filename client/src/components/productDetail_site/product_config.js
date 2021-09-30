import React, { useEffect, useState } from "react";

const ProductConfig = () => {
  const [config, setData] = useState([]);

  useEffect(() => {
    const arr = {
      name: "Laptop Dell ",
      price: 15000000,
      sale: 15,
    };
    setData(arr);
  }, []);

  return (
    <form novalidate>
      <div className="row">
        <div className="col-md-6">
          <h2>
            <b> {config.name} </b>
          </h2>
          <p>SKU: XPS930001NS</p>
          <p>
            5 <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <b className="text-decoration-underline ms-2">7 đánh giá</b>
            <b className="text-decoration-underline ms-2"> 16 bình luận</b>{" "}
          </p>
          <p>
            <b>Thương hiệu</b> : Dell
          </p>
          <p>
            {" "}
            <b>Vi xử lý</b>: Intel Core i5-1035G1, 4 nhân / 8 luồng
          </p>
          <p>
            <b>Màn hình</b>: 13.4" FHD IPS (1920 x 1200) chống chói
          </p>
          <p>
            <b>Độ phủ màu</b>: 100% sRGB
          </p>
          <p>
            <b>RAM</b> : 8GB LPDDR4X bus 3733 MHz (RAM liền mainboard - không
            thể nâng cấp)
          </p>
          <p>
            <b>Card đồ họa</b>: Intel UHD G1
          </p>
          <p>
            <b>Lưu trữ</b>: 256GB m.2 NVMe (Nâng cấp tối đa 2TB)
          </p>
          <p>
            <b>Pin</b>: 52Wh
          </p>
          <p>
            <b>Kết nối chính</b>: 2 x USB-C with Thunderbolt 3, 1 x microSD Card
            slot
          </p>
          <p>
            <b>Cân nặng</b>: 1.3 kg
          </p>
          <p>
            <b>Hệ điều hành</b>: Windows 10 bản quyền
          </p>
          <p>
            {" "}
            <b>Màu sắc</b>:Platinum Silver
          </p>
        </div>

        <div className="col-md-6 mt-3">
          <div>
            <h3 className="text-danger">
              <b> {Number(config.price).toLocaleString("vi-VN")} vnđ </b>
            </h3>
            <p>
              <small>
                <del>
                  {(((100 - config.sale) / 100) * config.price).toLocaleString(
                    "vi-VN"
                  )}
                </del>
                vnđ
              </small>
            </p>
            <input
              type="number"
              className="form-control"
              min="1"
              defaultValue="1"
            />
            <button type="submit" className="p-2 addcart-btn w-100 mt-3">
              {" "}
              <i className="fas fa-shopping-cart me-2"></i>Thêm vào giỏ
            </button>
            <button type="submit" className="p-2 addcart-btn w-100 mt-3">
              {" "}
              <i className="far fa-heart me-2"></i>Yêu thích
            </button>
          </div>
          <p className="mt-3">
            Hotline<b>: 0123456789</b>
          </p>
          <div className="card p-3 mt-5">
            Bảo hành
            <li>
              Bảo hành <b>12 tháng tại TGLT</b>
            </li>
            <li>
              Đổi mới <b>trong 15 ngày đầu tiên</b>
            </li>
          </div>

          <div className="card p-3 mt-2">
            <p className="text-danger">
              Từ 10/08 - 31/08 giảm 550.000đ khi mua Microsoft Office 365 kèm
              laptop.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <h4>Có 4 cấu hình tùy chọn</h4>
      <div className="card p-1 mt-1 form-check" for="validationTooltip05">
        <input type="checkbox" id="validationTooltip05" required />

        <div className="p-3">
          <small>SKU: XPS930001NS</small>
          <p className="mt-3">
            Intel Core i7-1065G7, RAM 8GB, 256GB m.2 NVMe, 13.4" FHD+ IPS
            (1920x1200), Intel UHD G1, 52Wh, Silver Hàng New, Outlet, Nhập khẩu
          </p>
        </div>
        <div className="position-absolute end-0 top-0 p-1">
          <p className="text-danger">
            <b> 26.990.000 ₫</b>{" "}
          </p>
          <span>
            {" "}
            <del>
              <b>26.990.000 ₫</b>{" "}
            </del>
          </span>
        </div>
      </div>
      <div className="card p-1 mt-1 form-check" for="validationTooltip05">
        <input type="checkbox" id="validationTooltip05" required />

        <div className="p-3">
          <small>SKU: XPS930001NS</small>
          <p className="mt-3">
            Intel Core i7-1065G7, RAM 8GB, 256GB m.2 NVMe, 13.4" FHD+ IPS
            (1920x1200), Intel UHD G1, 52Wh, Silver Hàng New, Outlet, Nhập khẩu
          </p>
        </div>
        <div className="position-absolute end-0 top-0 p-1">
          <p className="text-danger">
            <b> 26.990.000 ₫</b>{" "}
          </p>
          <span>
            {" "}
            <del>
              <b>26.990.000 ₫</b>{" "}
            </del>
          </span>
        </div>
      </div>
      <div className="card p-1 mt-1 form-check" for="validationTooltip05">
        <input type="checkbox" id="validationTooltip05" required />

        <div className="p-3">
          <small>SKU: XPS930001NS</small>
          <p className="mt-3">
            Intel Core i7-1065G7, RAM 8GB, 256GB m.2 NVMe, 13.4" FHD+ IPS
            (1920x1200), Intel UHD G1, 52Wh, Silver Hàng New, Outlet, Nhập khẩu
          </p>
        </div>
        <div className="position-absolute end-0 top-0 p-1">
          <p className="text-danger">
            <b> 26.990.000 ₫</b>{" "}
          </p>
          <span>
            {" "}
            <del>
              <b>26.990.000 ₫</b>{" "}
            </del>
          </span>
        </div>
      </div>
    </form>
  );
};
export default ProductConfig;
