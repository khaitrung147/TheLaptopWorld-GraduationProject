import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListFeatures({ data }) {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    if (data) {
      setPrice(
        (
          ((100 - data.CauHinhSanPham[0].PhanTramGiamGia) / 100) *
          data.CauHinhSanPham[0].GiaSanPham
        ).toLocaleString("vi-vn")
      );
    }
  }, [data]);
  return (
    <>
      <Link className="col" to={"/san-pham/" + data.Key}>
        <div className="row h-100 p-2 ">
          <div className="card">
            <div className="d-flex align-items-center">
              <div className="col-sm-5">
                <div className="w-100">
                  <img
                    src={data.HinhAnh[0].Url}
                    alt=""
                    className="w-100 text-center"
                  />
                </div>
              </div>
              <div className="col-sm-7 pt-4 pb-4">
                <h5 className="fs-6 fw-bolder">{data.TenSanPham}</h5>
                <div className="mt-3">
                  <span className="">{data.CauHinhSanPham[0].HeDieuHanh}</span>
                  <p>{data.CauHinhSanPham[0].ViXuLy}</p>
                </div>
                <div className="text-dark">
                  <span>{data.CauHinhSanPham[0].ManHinh}</span>
                </div>
                <div className="price mt-3">
                  <b className="text-info">Giá từ : {price} VNĐ </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ListFeatures;
