/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

const Product = () => {
  const [product, setData] = useState([]);

  useEffect(() => {
    const arr = [
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
      {
        name: "Dell Inspiron 14 7405 2 in 1",
      },
      {
        name: "HP Pavilion 15 (Intel Gen 11)",
      },
      {
        name: "Acer Swift 3X (Chính hãng)",
      },
      {
        name: "HP Victus 16",
      },
      {
        name: "MSI Modern 14 B10",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
    ];
    setData(arr);
  }, []);

  return (
    <div className="row mt-4">
      {product.slice(0, 8).map((e) => (
        <div className="col-xl-3 col-md-6 col-sm-6 col-6 product-box mb-3">
          <div className="card p-2 product-card">
            <a className=" mb-4 product-tag" href="#">
              <div className="img-box w-100">
                <img
                  src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                  className="w-100"
                  alt=""
                />
              </div>
            </a>
            <div className="card-body ">
              <h6>{e.name}</h6>
              <h6>
                <p>
                  Giá từ : <b className="text-danger">200.000vnđ</b>
                </p>
              </h6>
              <p>
                {" "}
                <small>
                  {" "}
                  <del>300.000vnđ</del>{" "}
                </small>{" "}
              </p>

              <small>
                <i className="fas fa-gifts text-danger me-2"></i> Đang giảm giá
              </small>
            </div>
            <div className="hide">
              Color: <b className="text-warning"> Gold </b>
              <p></p>
              <button className="w-100 btn-info btn text-light fw-bold">
                {" "}
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Product;
