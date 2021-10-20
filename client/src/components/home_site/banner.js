/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Banner = () => {
  return (
    <header className="">
      <div className="container shopnow py-5">
        <div className="row">
          <div className="col-xl-6 col-lg-6 content1  ">
            <h1 className="text-light">Apple Macbook Air MQD32 Laptop</h1> 
            <p className="fw-bold text-light">
              Hệ thống cửa hàng cung cấp Laptop toàn quốc , với những mẫu mã sản
              phẩm đa dạng và đảm bảo uy tín chất lượng sản phầm
            </p>
            <a
              href=""
              className="rounded-pill bg-orange fw-bold btn custom-btn mt-4"
            >
              <span className="p-3">Mua hàng ngay</span>
            </a>
          </div>

          <div className="col-xl-6 col-lg-6 text-light">
            <div className="white-circle "></div>
            <div className="orange-circle rounded-circle"></div>
            <div className="w-75 content2">
              <img
                className="w-100"
                src="https://pngimg.com/uploads/macbook/macbook_PNG101747.png"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Banner;
