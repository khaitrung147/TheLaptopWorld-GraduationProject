import React from "react";
import Breadcrumb from "../../constants/breadcrumb";
import Products from "./product";

import "./index.css";
import Filter from "./filter";
const Product = () => {
  return (
    <main>
      <div className="custom-bg">
        <div className="container pt-3">
          <Breadcrumb
            key=""
            currentPage="Sản phẩm"
            listBread={[
              {
                path: "/",
                pageName: "Trang chủ",
              },
            ]}
          />
        </div>

        <div className="container mt-2 mb-5">
          <div className="row">
            <div className="col-md-12 col-xl-3 col-lg-3 col-sm-12 mb-3 filter">
              <Filter />
            </div>
            <div className="col-md-12 col-xl-9 col-lg-9 col-sm-12 ">
              <Products key="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
