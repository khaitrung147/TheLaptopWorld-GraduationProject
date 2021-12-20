/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Sidebar from "../sidebar";
function Like() {
  return (
    <main>
      <div className="container mt-5 mb-5">
        <div className="row">
          <Sidebar />
          <div className="col-xl-10 col-lg-9 col-md-9">
            <h3 className="fw-bold">Sản phẩm yêu thích</h3>
            <div className="card p-3">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-2">
                  <div className="w-100">
                    <a href>
                      <img
                        className="w-100"
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/7/15/dell-xps-13-7390-2-in-1-XPS73902in102NU.jpg"
                        alt
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <b>
                    {" "}
                    <a href className="text-decoration-none text-dark">
                      Dell XPS 13 7390 (2 in 1)
                    </a>{" "}
                  </b>
                  <p className="text-secondary mt-3">
                    <small>SKU: XPS73902in102NU</small>
                  </p>
                  <p>
                    Intel Core i7-1065G7, RAM 16GB, 512GB NVMe, 13.4" FHD+ IPS
                    (1920 x 1200) cảm ứng, Intel Iris Plus G7, 51Wh, Frost White
                  </p>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <b className="text-danger">29.990.000 ₫</b>
                  <p>
                    <small />
                  </p>
                  <p>
                    <small>
                      <i className="fas fa-gifts text-danger me-2" /> Quà tặng
                      kèm
                    </small>
                  </p>{" "}
                  <p />
                  <button className="btn btn-outline-dark rounded-pill mt-4 view-all float-start">
                    <b>Thêm vào giỏ</b>
                  </button>
                </div>
              </div>
              <div className="position-absolute end-0 p-3 top-0 unlike">
                <i className="fas fa-heart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Like;
