import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListFeatures({ data }) {
  const [price, setPrice] = useState([]);
  const [config , setConfig] = useState([])
  useEffect(() => {
    data.CauHinhSanPham.splice(0, 1).map((e) =>
    setPrice(
      (((100 - e.PhanTramGiamGia) / 100) * e.GiaSanPham).toLocaleString(
        "vi-vn"
      ),
      setConfig(e)
    )
  );
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
              <div className="col-sm-7 pt-4 pb-4 ms-3">
                <h5 className="fs-6 fw-bolder">{data.TenSanPham}</h5>
                <div className="mt-3">
                  {config.HeDieuHanh}
                </div>
                <div className="text-dark">
                  {config.ManHinh}
                </div>
                <div className="price mt-3">
                  <b className="text-info">
                    Giá từ : {price} VNĐ{" "}
                  </b>
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
