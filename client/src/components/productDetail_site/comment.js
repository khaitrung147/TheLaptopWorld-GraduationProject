import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListComment, postComment } from "../../redux/actions/comment";
import CommentList from "./listcomment";
import { getListStaff } from "../../redux/actions/staff";
import { SpinnerCircular } from "spinners-react";
const Comment = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.comment.data);
  const status = useSelector((state) => state.comment.status);
  const postLoading = useSelector((state) => state.comment.postload);
  const staffData = useSelector((state) => state.staff.postload);
  const productID = props.product._id;
  const formValue = useRef();

  useEffect(() => {
    dispatch(getListComment(productID));
    dispatch(getListStaff());
    return () => {
      dispatch(getListComment(productID));
      dispatch(getListStaff());
    };
  }, [dispatch, productID]);

  useEffect(() => {
    if (status == true) {
      dispatch(getListComment(productID));
      dispatch(getListStaff());
    }
    return () => {
      dispatch(getListComment(productID));
      dispatch(getListStaff());
    };
  }, [dispatch, productID, status]);

  const PostUserComment = async (e) => {
    e.preventDefault();
    let body = {
      MaSanPham: productID,
      MaKhachHang: "616e9dc3fa01938e427f1dba",
      NoiDungBinhLuan: formValue.current.value,
      PhanHoi: [],
    };
    dispatch(postComment(body));
    formValue.current.value = "";
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
            required
            ref={formValue}
          ></textarea>
          {postLoading ? (
            <SpinnerCircular
              size={40}
              thickness={80}
              speed={150}
              color="rgb(255, 93, 0)"
              secondaryColor="rgb(47, 212, 234)"
              className="mt-2 float-end"
            />
          ) : (
            <button
              type="submit"
              className="cart-btn mt-2 rounded-pill  px-3 py-2 float-end fw-bold"
            >
              {" "}
              Gửi bình luận{" "}
            </button>
          )}
        </div>
      </form>
      <>
        <>
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
                    <i className="far fa-comments"></i> {(data || []).length}{" "}
                    bình luận
                  </small>{" "}
                </b>{" "}
              </h4>
              <CommentList
                comment={data}
                customer={props.customer}
                staff={staffData}
                load={dispatch(getListComment(productID))}
              />
              <button className="cart-btn  rounded-pill mt-4 px-3 py-2 m-auto d-block fw-bold">
                {" "}
                Xem Thêm bình luận{" "}
              </button>{" "}
            </>
          )}
        </>
      </>
    </>
  );
};
export default Comment;
