/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Cpn from "../../component";

const Detail = () => {
  return (
    <main className="mt-3">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item ms-sm-2">
              <Link to="/"> Trang chủ </Link>
            </li>
            <li
              className="breadcrumb-item active text-dark"
              aria-current="page"
            >
              <b>Chi tiết Laptop</b>{" "}
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 img-slider">
            <Cpn.Site.ProductImg />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <Cpn.Site.ProductConfig />
          </div>

          <div className="mt-5 mb-3">
            <h2>
              <b>Đánh giá chi tiết</b>{" "}
            </h2>
            <Cpn.Site.Review />
            <button className="addcart-btn  rounded-pill mt-4 view-all">
              {" "}
              <b>Xem Thêm nội dung</b>{" "}
            </button>
          </div>
          <hr />

          <div className="mt-3 mb-3" id="danhgia">
            <h2>
              <b>Đánh giá của khách hàng</b>{" "}
            </h2>
            <Cpn.Site.Rating />
            <button className="addcart-btn rounded-pill mt-4 view-all">
              {" "}
              <b>Xem Thêm đánh giá</b>{" "}
            </button>
          </div>

          <div className="mt-5 mb-3" id="binhluan">
            <h2>
              <b>Bình luận về sản phẩm</b>{" "}
            </h2>
            <Cpn.Site.Comment />
            <button className="addcart-btn  rounded-pill mt-4 view-all">
              {" "}
              <b>Xem Thêm bình luận</b>{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Detail;
