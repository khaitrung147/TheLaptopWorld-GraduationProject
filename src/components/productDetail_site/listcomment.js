/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import moment from "moment";
const CommentList = (props) => {
  return (
    <div className="row">
      {(props.comment || []).map((e) =>
        (props.customer || []).map((kh) => (
          <>
            {e.MaKhachHang == kh._id ? (
              <>
                <div
                  className="col-xl-2 col-lg-2 col-md-2 col-sm-2  "
                  key={e._id}
                >
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
                  <div className="d-flex align-items-center">
                    {" "}
                    <span className="me-2">
                      <b className="fw-bold">{kh.TenKhachHang}</b>{" "}
                    </span>
                  </div>

                  <p className="mt-2">{e.NoiDungBinhLuan}</p>

                  <input type="checkbox" className="check mb-2" />
                  <span className="ms-3">
                    {moment(e.createdAt).format("DD/MM/YYYY, HH:mm A")}
                  </span>

                  <form action="" className="repform mt-3">
                    <div className="">
                      <textarea
                        className="form-control w-100"
                        placeholder="Viết bình luận"
                        rows="3"
                        required
                      ></textarea>
                      <button
                        type="submit"
                        className="cart-btn mt-2 rounded-pill mt-1 py-1 px-4 fw-bold"
                      >
                        Gửi
                      </button>
                    </div>
                  </form>
                  <hr />
                  {(e.PhanHoi || []).map((rep) =>
                    (props.customer || []).map((repper) => (
                      <>
                        {rep.MaKhachHang == repper._id ? (
                          <div className="row">
                            <div className="col-2  ">
                              {repper.Avatar == "" ? (
                                <img
                                  className="rounded-circle mt-3 m-auto d-block"
                                  style={{ width: "4rem", height: "4rem" }}
                                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="rounded-circle d-block m-auto mt-3"
                                  style={{ width: "4rem", height: "4rem" }}
                                  src={repper.Avatar}
                                  alt=""
                                />
                              )}
                            </div>
                            <div className="col-9 ms-3">
                              <div className="d-flex align-items-center">
                                {" "}
                                <span className="me-2">
                                  <b className="fw-bold">
                                    {repper.TenKhachHang}
                                  </b>{" "}
                                </span>
                              </div>

                              <p className="mt-2">{rep.NoiDungTraLoi}</p>
                              <span className="">
                                {" "}
                                {moment(rep.ThoiGian).format(
                                  "DD/MM/YYYY, HH:mm A"
                                )}
                              </span>
                              <hr />
                            </div>
                          </div>
                        ) : (
                          <p></p>
                        )}
                      </>
                    ))
                  )}

                  {(e.PhanHoi || []).map((rep) =>
                    (props.staff || []).map((repper) => (
                      <>
                        {rep.MaKhachHang == repper._id ? (
                          <div className="row">
                            <div className="col-2  ">
                              {repper.Avatar == "" ? (
                                <img
                                  className="rounded-circle mt-3 m-auto d-block"
                                  style={{ width: "4rem", height: "4rem" }}
                                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="rounded-circle d-block m-auto mt-3"
                                  style={{ width: "4rem", height: "4rem" }}
                                  src={repper.Avatar}
                                  alt=""
                                />
                              )}
                            </div>
                            <div className="col-9 ms-3">
                              <div className="d-flex align-items-center">
                                {" "}
                                <span className="me-2">
                                  <b className="fw-bold">
                                    Nhân viên {repper.TenNhanVien} trả lời
                                  </b>{" "}
                                </span>
                              </div>

                              <p className="mt-2">{rep.NoiDungTraLoi}</p>
                              <span className="">
                                {moment(rep.ThoiGian).format(
                                  "DD/MM/YYYY, HH:mm A"
                                )}
                              </span>
                              <hr />
                            </div>
                          </div>
                        ) : (
                          <p></p>
                        )}
                      </>
                    ))
                  )}
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

export default CommentList;
