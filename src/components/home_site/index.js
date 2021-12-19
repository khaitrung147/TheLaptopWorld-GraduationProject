/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";
import Brand from "./brand";
import Currency from "./currency";
import Products from "./CurrentProduct/currentproduct";
import Features from "./Feature/features";
import "./index.css";
import { getListProduct } from "../../redux/actions/product";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);
  return (
    <main className="">
      <Banner />
      <div className="container">
        <div className="mt-5">
          <h2 className="fw-bold">Sản phẩm mới</h2>
          <Features />
          <h2 className="fw-bold">Laptop hiện có</h2>
          <Brand />

          <Products />
          <Link
            to={"/san-pham"}
            className=" border rounded-pill mt-4 view-all d-block m-auto mb-5"
          >
            {" "}
            <b>Xem tất cả </b>{" "}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
