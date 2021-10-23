/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../constants/breadcrumb";
import ProductImg from "./productImg_slide";
import ProductConfig from "./product_config";
import Rating from "./rating";
import Comment from "./comment";
import { getDetailProduct } from "../../redux/actions/product";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { SpinnerCircular } from "spinners-react";
const Detail = () => {
  const product = useSelector((state) => state.detailProduct.data);

  const loading = useSelector((state) => state.detailProduct.load);
  const [paramKey, setKey] = useState([]);
  const dispatch = useDispatch();

  const Key = () => {
    const key = window.location.pathname
      .split("/san-pham/")
      .splice(1)
      .toString();
    setKey(key);
  };
  useEffect(() => {
    Key();
    dispatch(getDetailProduct(paramKey));
    return () => {
      dispatch(getDetailProduct(paramKey));
    };
  }, [dispatch, paramKey]);

  return (
    <main className="">
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
            {product == undefined ? (
              <SpinnerCircular
                size={90}
                thickness={80}
                speed={150}
                color="rgb(255, 93, 0)"
                secondaryColor="rgb(47, 212, 234)"
                className="m-auto"
              />
            ) : loading ? (
              <SpinnerCircular
                size={90}
                thickness={80}
                speed={150}
                color="rgb(255, 93, 0)"
                secondaryColor="rgb(47, 212, 234)"
                className="m-auto"
              />
            ) : product ? (
              <>
                <ProductImg data={product} />
                <ProductConfig data={product} />
              </>
            ) : (
              <p>no data</p>
            )}
          </div>
        </div>
      </div>

      <div className="container bg-white mt-5">
        <div className="mt-3 mb-3 " id="danhgia">
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
