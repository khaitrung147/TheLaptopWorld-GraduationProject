/* eslint-disable array-callback-return */
import React from "react";
import moment from "moment";
const RateList = (props) => {
  return (
    <div className="row">
      {(props.rate || []).map((e) =>
        (props.customer || []).map((kh) => (
          <>
            {e.MaKhachHang == kh._id ? (
              <>
                <div
                  className="col-xl-2 col-lg-2 col-md-2 col-sm-2  mb-5 pb-5"
                  key={e._id}
                >
                  {kh.Avatar === "NULL" ? (
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
                  <div className="d-flex align-items-center">
                    {" "}
                    <span className="me-3">
                      <b className="fw-bold">{kh.TenKhachHang}</b>{" "}
                    </span>
                    {e.Rate}
                    <i className="far fa-star custom ms-1"></i>{" "}
                  </div>

                  <p className="mt-2">{e.NoiDungDanhGia}</p>
                  <span>
                    {moment(e.createdAt).format("DD/MM/YYYY, HH:mm A")}
                  </span>
                  <hr />
                </div>
              </>
            ) : null}
          </>
        ))
      )}
    </div>
  );
};

export default RateList;
