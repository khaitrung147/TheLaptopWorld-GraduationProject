/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListCurrent(props) {
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
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  product-box mb-3  mt-3">
      <div className="card product-card ">
        <div className="row card-body" key={props.data._id}>
          <div className="col-6">
            {config.PhanTramGiamGia == 0 ? null : (
              <small className="product-sale fw-bold text-center p-1 rounded-pill ">
                -{config.PhanTramGiamGia}%
              </small>
            )}
          </div>
          <div className="col-6">
            <small className="text-secondary float-end product-icon">
              <Link to={"/san-pham/" + props.data.Key}>
                <small className="text-secondary float-end product-icon">
                  <i
                    class="fas fa-info-circle"
                    style={{ fontSize: "15px" }}
                  ></i>
                </small>
              </Link>
            </small>
          </div>
        </div>
        <Link
          className="product-tag  d-flex align-items-center h-50 overflow-hidden"
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
          <h6 className="fw-bold mt-2 text-info">VN?? {price}</h6>
        </div>
      </div>
    </div>
  );
}
export default ListCurrent;
