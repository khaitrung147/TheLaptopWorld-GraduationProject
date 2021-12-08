/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Banner from "./banner";
import Brand from "./brand";
import Currency from "./currency";
import Products from "./currentproduct";
import Features from "./Feature/features";
import "./index.css";
const Home = () => {
  return (
    <main className="">
      <Banner />
      <div className="container">
        <div className="mt-5">
          <h2 className="fw-bold">Sản phẩm mới</h2>
          <Features />
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
      </div>
    </main>
  );
};

export default Home;
