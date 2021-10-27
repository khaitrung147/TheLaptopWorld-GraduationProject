/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductColumn(props) {
  const [imgUrl, setImgUrl] = useState([]);
  const [price, setPrice] = useState([]);
  const [config, setConfig] = useState([]);
  useEffect(() => {
    props.data.HinhAnh.splice(0, 1).map((e) => setImgUrl(e.Url));
  }, [props.data.HinhAnh]);

  useEffect(() => {
    props.data.CauHinhSanPham.splice(0, 1).map((e) =>
      setPrice(
        (((100 - e.PhanTramGiamGia) / 100) * e.GiaSanPham).toLocaleString(
          "vi-vn"
        ),
        setConfig(e)
      )
    );
  }, [props.data.CauHinhSanPham]);
  return (
    <>
      {props.view ? (
        <div className="container">
          <div className=" card mt-3" key={props.data._id}>
            <div className="row">
              <div
                className="col-5  d-flex align-items-center"
                style={{ width: "42%" }}
              >
                <Link className="" to={"/san-pham/" + props.data.Key}>
                  <img
                    src={imgUrl}
                    className=""
                    width="160"
                    height="155"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-5 d-flex align-items-center">
                <div className="">
                  <div>
                    <small className="product-config fw-bold text-center p-1 rounded-pill ">
                      {config.Pin}
                    </small>
                    <small className="ms-2 product-config fw-bold text-center p-1 rounded-pill ">
                      {config.CanNang}
                    </small>
                  </div>
                  <h6 className="fw-bold mt-2">
                    <Link
                      className="text-decoration-none text-dark"
                      to={"/san-pham/" + props.data.Key}
                    >
                      {" "}
                      {props.data.TenSanPham}{" "}
                    </Link>{" "}
                  </h6>
                  <h6 className="fw-bold mt-2 text-info">VNĐ {price}</h6>
                </div>
              </div>
              <div className="col-2">
                <div className="position-absolute top-0 end-0 p-1">
                  <small className="product-sale fw-bold text-center p-1 rounded-pill ">
                    -{config.PhanTramGiamGia}%
                  </small>
                </div>
                <div className="position-absolute bottom-0 end-0 p-1">
                  <small className="text-secondary float-end product-icon">
                    <i class="fas fa-info-circle "></i>
                    <i class="far fa-heart ms-2"></i>
                    <i class="fas fa-cart-plus ms-2"></i>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  product-box mb-3  mt-3">
          <div className="card product-card ">
            <div className="row card-body" key={props.data._id}>
              <div className="col-6">
                <small className="product-sale fw-bold text-center p-1 rounded-pill ">
                  -{config.PhanTramGiamGia}%
                </small>
              </div>
              <div className="col-6">
                <small className="text-secondary float-end product-icon">
                  <i class="fas fa-info-circle "></i>
                  <i class="far fa-heart ms-2"></i>
                  <i class="fas fa-cart-plus ms-2"></i>
                </small>
              </div>
            </div>
            <Link
              className="product-tag  d-flex align-items-center h-50"
              to={"/san-pham/" + props.data.Key}
            >
              <div className="img-box w-100 ">
                <img src={imgUrl} className="w-100" alt="" />
              </div>
            </Link>
            <div className="card-body">
              <div>
                <small className="product-config fw-bold text-center p-1 rounded-pill ">
                  {config.Pin}
                </small>
                <small className="ms-2 product-config fw-bold text-center p-1 rounded-pill ">
                  {config.CanNang}
                </small>
              </div>
              <h6 className="fw-bold mt-2">
                <Link
                  className="text-decoration-none text-dark"
                  to={"/san-pham/" + props.data.Key}
                >
                  {" "}
                  {props.data.TenSanPham}{" "}
                </Link>{" "}
              </h6>
              <h6 className="fw-bold mt-2 text-info">VNĐ {price}</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductColumn;
