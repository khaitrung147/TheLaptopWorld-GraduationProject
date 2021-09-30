/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Cpn from "../../component";
const Home = () => {
  return (
    <main className="">
      <div className="container">
        <div className="row mt-3">
          <div className="col-xl-8 col-md-12 col-sm-12 mb-2 slide-contain">
            <Cpn.Site.Slider_home />
          </div>
          <div className="col-xl-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3 mt-xl-0 ">
            <Cpn.Site.News />
            <div className=" mt-3 ms-sm-2">
              <a
                href="news.html"
                className="text-decoration-none text-black ms-2"
              >
                <b className="">
                  {" "}
                  Tất cả tin tức{" "}
                  <i className="fas fa-chevron-right ms-2 text-info"></i>
                </b>
              </a>
            </div>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="mt-3 product-slide">
          <h2 className="fw-bold">Sản phẩm giảm giá</h2>
          <Cpn.Site.Saleproduct />
          <a
            href={"#"}
            className=" border rounded-pill mt-4 view-all d-block m-auto "
          >
            {" "}
            <b>Xem tất cả </b>{" "}
          </a>
        </div>

        <div className="mt-5">
          <h2 className="fw-bold">Laptop hiện có</h2>
          <Cpn.Site.Brand />
          <div className="mt-3">
            <h6 className=" fw-bold">Khoảng giá </h6>
            <Cpn.Site.Currency />
          </div>
          <Cpn.Site.Products />
          <a
            href={"#"}
            className=" border rounded-pill mt-4 view-all d-block m-auto "
          >
            {" "}
            <b>Xem tất cả </b>{" "}
          </a>
        </div>

        <div className="mt-3 product-slide">
          <h2 className="fw-bold">Hàng đang về</h2>
          <Cpn.Site.Coming />

          <a
            href={"#"}
            className=" border rounded-pill mt-4 view-all d-block m-auto "
          >
            {" "}
            <b>Xem tất cả </b>{" "}
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
