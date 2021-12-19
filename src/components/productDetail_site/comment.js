/* eslint-disable eqeqeq */
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListComment, postComment } from "../../redux/actions/comment";
import CommentList from "./listcomment";
import { getListStaff } from "../../redux/actions/staff";
import { toast } from "react-toastify";
import { Spin } from "antd";

const Comment = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.comment.data);
  const load = useSelector((state) => state.comment.load);
  const status = useSelector((state) => state.comment.status);
  const { repstatus, repload } = useSelector((state) => state.comment);
  const postLoading = useSelector((state) => state.comment.postload);
  const staffData = useSelector((state) => state.staff.data);
  const productID = props.product._id;
  const formValue = useRef();

  useEffect(() => {
    dispatch(getListComment(productID));
  }, [dispatch, productID]);

  useEffect(() => {
    dispatch(getListStaff());
  }, [dispatch]);

  useEffect(() => {
    if (status == true) {
      dispatch(getListComment(productID));
    }
  }, [dispatch, productID, status]);

  useEffect(() => {
    if (repstatus == true) {
      dispatch(getListComment(productID));
    }
  }, [dispatch, productID, repstatus]);

  if (localStorage.thelaptopworld_token) {
    var token = JSON.parse(localStorage.thelaptopworld_token);
  }
  const PostUserComment = async (e) => {
    e.preventDefault();
    if (!localStorage.thelaptopworld_token) {
      toast.error("Đăng nhập để gửi bình luận !", { position: "top-center" });
    } else {
      let body = {
        MaSanPham: productID,
        MaKhachHang: token.userId,
        NoiDungBinhLuan: formValue.current.value,
        PhanHoi: [],
      };
      if (formValue.current.value == "") {
        toast.warn("Nhập nội dung bình luận", { position: "top-center" });
      } else {
        dispatch(postComment(body));
        formValue.current.value = "";
      }
    }
  };

  return (
    <>
      <form action="" className="mb-5" onSubmit={PostUserComment}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Viết bình luận"
            id="exampleFormControlTextarea1"
            rows="3"
            ref={formValue}
          ></textarea>

          {token ? (
            token.role ? (
              <button
                type="submit"
                className="cart-btn mt-2 rounded-pill  px-3 py-2 float-end fw-bold"
                disabled
                style={{ cursor: "no-drop" }}
              >
                Gửi bình luận
              </button>
            ) : (
              <button
                type="submit"
                className="cart-btn mt-2 rounded-pill  px-3 py-2 float-end fw-bold"
                disabled={postLoading ? true : false}
              >
                Gửi bình luận
              </button>
            )
          ) : (
            <button
              type="submit"
              className="cart-btn mt-2 rounded-pill  px-3 py-2 float-end fw-bold"
              disabled={postLoading ? true : false}
            >
              Gửi bình luận
            </button>
          )}
        </div>
      </form>

      <Spin spinning={load}>
        {(data || []).length == 0 ? (
          <h5 className="text-center p-3 fw-bold">
            {" "}
            Sản phẩm chưa có bình luận...{" "}
          </h5>
        ) : (
          <>
            <h4 className="mt-5">
              <b href="" className="ms-2">
                <small>
                  <i className="far fa-comments"></i> {(data || []).length} bình
                  luận
                </small>{" "}
              </b>{" "}
            </h4>
            <Spin spinning={postLoading ? true : false}>
              <CommentList
                comment={data}
                customer={props.customer}
                staff={staffData ? staffData.data : null}
                repload={repload}
              />
            </Spin>
          </>
        )}
      </Spin>
      {/* )} */}
    </>
  );
};
export default Comment;
