import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListComment, postComment } from "../../redux/actions/comment";
import { SpinnerCircular } from "spinners-react";
import CommentList from "./listcomment";
import { getListStaff } from "../../redux/actions/staff";
import axios from "axios";

const Comment = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.comment.data);
  const load = useSelector((state) => state.comment.load);
  const staffData = useSelector((state) => state.staff.data);

  const productID = props.product._id;
  useEffect(() => {
    dispatch(getListComment(productID));
    dispatch(getListStaff());
    return () => {
      dispatch(getListComment(productID));
      dispatch(getListStaff());
    };
  }, [dispatch, productID]);

  useEffect(() => {}, [data, props.customer, staffData]);

  const formValue = useRef();

  const PostUserComment = async (e) => {
    e.preventDefault();
    let body = {
      MaSanPham: productID,
      MaKhachHang: "616e9dc3fa01938e427f1dba",
      NoiDungBinhLuan: formValue.current.value,
      PhanHoi: [],
    };
    await axios
      .post("http://localhost:5000/api/v1/binh-luan-khach-hang", body)
      .then((res) => {
        dispatch(getListComment(productID));
        dispatch(getListStaff());
      });
  };
  console.log(data);

  return (
    <>
      <form action="" className="mb-5" onSubmit={PostUserComment}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Viết bình luận"
            id="exampleFormControlTextarea1"
            rows="3"
            required
            ref={formValue}
          ></textarea>

          <button
            type="submit"
            className="cart-btn mt-2 rounded-pill mt-1 view-all float-end fw-bold"
          >
            {" "}
            Gửi bình luận{" "}
          </button>
        </div>
      </form>
      <>
        <>
          {(data || []).length == 0 ? (
            <h5 className="text-center p-3 ">
              {" "}
              <b>Sản phẩm chưa có bình luận...</b>{" "}
            </h5>
          ) : (
            <>
              <h4 className="mt-5">
                <b href="" className="ms-2">
                  <small>
                    <i className="far fa-comments"></i> {(data || []).length}{" "}
                    bình luận
                  </small>{" "}
                </b>{" "}
              </h4>
              <CommentList
                comment={data}
                customer={props.customer}
                staff={staffData}
              />
              <button className="cart-btn  rounded-pill mt-4 view-all m-auto d-block">
                {" "}
                <b>Xem Thêm bình luận</b>{" "}
              </button>{" "}
            </>
          )}
        </>
      </>
    </>
  );
};
export default Comment;
