import React from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../../constants/breadcrumb";

import ProductList from "./productList";

const Product = () => {
  return (
    <div className="">
      <div className="container p-3">
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
      <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 col-xl-3 col-sm-12 mb-3 filter"></div>
            <div className="col-md-9 col-xl-9 col-sm-12 ">
              <div className="w-25 select">
                <select name id className="form-select">
                  <option value>Tất cả</option>
                  <option value>Mới nhập hàng</option>
                  <option value>Giá từ cao đến thấp</option>
                  <option value>Giá từ thấp đến cao</option>
                  <option value>Sắp xếp A &gt; Z</option>
                  <option value>Sắp xếp Z &gt; A</option>
                </select>
              </div>
              <hr />
              <ProductList key="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
