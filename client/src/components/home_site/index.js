/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
<<<<<<< HEAD:client/src/components/home_site/home.js
import React, { Component } from "react";
import Brand from "./brand";
import Currency from "./currency";
import Product from "./currentproduct";
=======
import React from "react";

import Brand from "./brand";
import Currency from "./currency";
import Products from "./currentproduct";
>>>>>>> main:client/src/components/home_site/index.js
import News from "./news";
import Saleproduct from "./saleproduct";
import Slider_home from "./slider";
import Coming from "./upcoming";

<<<<<<< HEAD:client/src/components/home_site/home.js
class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="container mt-3">
          <div className="row h-100">
            <div className="col-xl-8 col-md-12 col-sm-12 mb-2 slide-contain">
              <Slider_home />
            </div>
            <div className="col-xl-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3 mt-xl-0 ">
              <News />
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
=======
const Home = () => {
  return (
    <main className="">
      <div className="container">
        <div className="row mt-3">
          <div className="col-xl-8 col-md-12 col-sm-12 mb-2 slide-contain">
            <Slider_home />
          </div>
          <div className="col-xl-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3 mt-xl-0 ">
            <News />
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
>>>>>>> main:client/src/components/home_site/index.js
            </div>
            <hr className="mt-3" />
          </div>

<<<<<<< HEAD:client/src/components/home_site/home.js
          <div className="mt-3 product-slide">
            <h2 className="fw-bold">Sản phẩm giảm giá</h2>
            <Saleproduct />
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
            <Brand />
            <div className="mt-3">
              <h6 className=" fw-bold">Khoảng giá </h6>
              <Currency />
            </div>
            <Product />
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
            <Coming />
=======
        <div className="mt-3 product-slide">
          <h2 className="fw-bold">Sản phẩm giảm giá</h2>
          <Saleproduct />
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
          <Brand />
          <div className="mt-3">
            <h6 className=" fw-bold">Khoảng giá </h6>
            <Currency />
          </div>
          <Products />
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
          <Coming />
>>>>>>> main:client/src/components/home_site/index.js

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
  }
}

export default Home;
