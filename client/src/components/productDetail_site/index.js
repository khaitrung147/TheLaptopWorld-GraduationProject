/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../constants/breadcrumb";
import ProductImg from "./productImg_slide";
import ProductConfig from "./product_config";
import Rating from "./rating";
import Comment from "./comment";
import { getListProduct } from "../../redux/actions/product";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
const Detail = () => {
  const products = useSelector((state) => state.products.data);
  const [paramKey, setKey] = useState([]);
  const [productData, setProduct] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);
  useEffect(() => {
    key();
    setProduct(products);

    (productData || []).map((e) => {
      if (e.Key === paramKey) {
        console.log(e);
      }
    });
  }, [products, productData, paramKey]);
  const key = () => {
    const key = window.location.pathname
      .split("/san-pham/")
      .splice(1)
      .toString();
    setKey(key);
  };

  return (
    <main className="">
      <form>
        <div className="bg-white">
          <div className="container">
            <div className="pt-3">
              <Breadcrumb
                key=""
                currentPage="Chi tiết Laptop"
                listBread={[
                  {
                    path: "/",
                    pageName: "Trang chủ",
                  },
                ]}
              />
            </div>
          </div>
          <div className="container">
            <div className="row ">
              <ProductImg />

              <ProductConfig />
            </div>
          </div>
        </div>
      </form>

      <div className="container bg-white mt-5">
        <div className="mt-3 mb-3 p-5" id="danhgia">
          <h2>
            <b>Đánh giá của khách hàng</b>{" "}
          </h2>
          <Rating />
        </div>

        <div className="mt-5 mb-3" id="binhluan">
          <h2>
            <b>Bình luận về sản phẩm</b>{" "}
          </h2>
          <Comment />
        </div>
      </div>
    </main>
  );
};
export default Detail;
