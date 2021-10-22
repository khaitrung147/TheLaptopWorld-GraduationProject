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
    <>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold">{config.name}</h1>
            <h4 className="text-info">
              <b>
                VNĐ {Number(config.price).toLocaleString("vi-VN")}{" "}
                <del className="ms-4 text-dark">
                  <small>VNĐ 16.000.000</small>
                </del>
              </b>
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
              <b>Thương hiệu:</b> Dell
            </p>
            <p>
              {" "}
              <b>Vi xử lý:</b> Intel Core i5-1035G1, 4 nhân / 8 luồng
            </p>
            <p>
              <b>Màn hình:</b> 13.4" FHD IPS (1920 x 1200) chống chói
            </p>
            <p>
              <b>Độ phủ màu:</b> 100% sRGB
            </p>
            <p>
              <b>RAM:</b> 8GB LPDDR4X bus 3733 MHz (RAM liền mainboard - không
              thể nâng cấp)
            </p>
            <p>
              <b>Card đồ họa:</b> Intel UHD G1
            </p>
            <p>
              <b>Lưu trữ:</b> 256GB m.2 NVMe (Nâng cấp tối đa 2TB)
            </p>
            <p>
              <b>Pin:</b> 52Wh
            </p>
            <p>
              <b>Kết nối chính:</b> 2 x USB-C with Thunderbolt 3, 1 x microSD
              Card slot
            </p>
            <p>
              <b>Cân nặng:</b> 1.3 kg
            </p>
            <p>
              <b>Hệ điều hành:</b> Windows 10 bản quyền
            </p>
            <p>
              {" "}
              <b>Màu sắc:</b> Platinum Silver
            </p>
          </div>

          <div className="mt-5">
            <div className="card p-3 ">
              <p className="text-danger">
                Từ 10/08 - 31/08 giảm 550.000đ khi mua Microsoft Office 365 kèm
                laptop.
              </p>
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
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="card bg-light p-2 mt-1 form-check"
                for="validationTooltip05"
              >
                <input type="checkbox" id="validationTooltip05" required />

                <p className="mt-5 fw-bold">
                  Intel Core i7-1065G7, RAM 8GB, 256GB m.2 NVMe, 13.4" FHD+ IPS
                  (1920x1200), Intel UHD G1, 52Wh, Silver Hàng New, Outlet, Nhập
                  khẩu
                </p>

                <div className="position-absolute end-0 top-0 p-1">
                  <p className="text-info">
                    <b>VNĐ 26.990.000</b>{" "}
                  </p>{" "}
                  <del>
                    <b>VNĐ 26.990.000</b>{" "}
                  </del>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="p-3 fw-bold">
            Dell XPS 13 9300 là sản phẩm laptop doanh nhân, với thiết kế mỏng
            nhẹ, tinh tế và sang trọng nhưng vẫn đủ mạnh mẽ để xử lý các tác vụ
            hằng ngày của người dùng. Đây là sự lựa chọn phù hợp dành cho các
            doanh nhân, những người làm văn phòng, hay thậm chí là học sinh sinh
            viên, những người thường xuyên phải mang máy theo bên mình trong
            những buổi học, cafe hay những chuyến công tác.
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductConfig;
