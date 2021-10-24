/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const RateList = (props) => {
  useEffect(() => {
    (props.data || []).map((dg) =>
      (props.customer || []).map((kh) => {
        if (dg.MaKhachHang == kh._id) {
          console.log(dg, kh);
        }
      })
    );
  }, []);
  return (
    <div className="row">
      {(props.data || []).map((e) =>
        (props.customer || []).map((kh) => (
          <>
            {e.MaKhachHang == kh._id ? (
              <>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2  ">
                  {kh.Avatar == "" ? (
                    <img
                      className="rounded-circle d-block m-auto mt-3"
                      style={{ width: "4rem", height: "4rem" }}
                      src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="rounded-circle d-block m-auto mt-3"
                      style={{ width: "4rem", height: "4rem" }}
                      src={kh.Avatar}
                      alt=""
                    />
                  )}
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                  <div>
                    {" "}
                    {e.Rate}
                    <i className="fas fa-star  text-warning ms-1"></i>
                    <span className="ms-3">
                      <b className="fw-bold">{kh.TenKhachHang}</b>{" "}
                    </span>{" "}
                  </div>

                  <p className="mt-2">{e.NoiDungDanhGia}</p>
                  <b>{e.createdAt}</b>
                  <hr />
                </div>
              </>
            ) : (
              <p></p>
            )}
          </>
        ))
      )}
    </div>
  );
};

export default RateList;
