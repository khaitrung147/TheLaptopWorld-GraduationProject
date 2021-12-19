/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { repComment } from "../../redux/actions/comment";
import { useDispatch } from "react-redux";
const CommentList = (props) => {
  const dispatch = useDispatch();
  const handleRepComment = (id, ph, i) => {
    const valueForm = document.querySelectorAll(".form-rep");
    let indexForm = valueForm[i].value;
    if (localStorage.thelaptopworld_token) {
      var storage = JSON.parse(localStorage.thelaptopworld_token);
    }
    if (indexForm == "") {
      toast.error("Bạn chưa nhập nội dung !", { position: "top-center" });
    } else {
      let checkStaff = false;
      if (storage.role) {
        checkStaff = true;
      }
      dispatch(
        repComment({
          idRep: id,
          body: [
            ...ph,
            {
              NhanVien: checkStaff,
              NguoiTraLoi: storage.userId,
              NoiDungTraLoi: indexForm,
            },
          ],
        })
      );
      valueForm[i].value = "";
    }
  };
  return (
    <div className="row">
      {(props.comment || []).map((e, index) =>
        (props.customer || []).map((kh, i) => (
          <>
            {e.MaKhachHang == kh._id ? (
              <>
                <div
                  className="col-xl-2 col-lg-2 col-md-2 col-sm-2 "
                  key={e._id}
                >
                  {kh.Avatar == "NULL" ? (
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
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 mb-5">
                  <div className="d-flex align-items-center">
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
                        className="form-control w-100 form-rep"
                        placeholder={
                          !localStorage.thelaptopworld_token
                            ? "Đăng nhập để trả lời   ^^"
                            : "Viết bình luận"
                        }
                        rows="3"
                      ></textarea>
                      <button
                        onClick={() =>
                          handleRepComment(e._id, e.PhanHoi, index)
                        }
                        disabled={
                          !localStorage.thelaptopworld_token ||
                          props.repload == false
                            ? true
                            : false
                        }
                        type="button"
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
                        {rep.NguoiTraLoi == repper._id ? (
                          <div className="row">
                            <div className="col-2  ">
                              {repper.Avatar == "NULL" ? (
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
                        ) : null}
                      </>
                    ))
                  )}

                  {(e.PhanHoi || []).map((rep) =>
                    rep.NhanVien == true
                      ? (props.staff || []).map((repper) => (
                          <>
                            {rep.NguoiTraLoi == repper._id ? (
                              <div className="row">
                                <div className="col-2  ">
                                  {repper.Avatar == "NULL" ? (
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
                            ) : null}
                          </>
                        ))
                      : null
                  )}
                </div>
              </>
            ) : null}
          </>
        ))
      )}
    </div>
  );
};

export default CommentList;
