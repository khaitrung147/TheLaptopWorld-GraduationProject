import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListComment } from "../../redux/actions/comment";
import { SpinnerCircular } from "spinners-react";
import CommentList from "./listcomment";
import { getListStaff } from "../../redux/actions/staff";
const Comment = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.comment.data);
  const load = useSelector((state) => state.comment.load);
  const staffData = useSelector((state) => state.staff.data);

  const [comment, setComment] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [staff, setStaff] = useState([]);

  const productID = props.product._id;
  useEffect(() => {
    dispatch(getListComment(productID));
    dispatch(getListStaff());
    return () => {
      dispatch(getListComment(productID));
      dispatch(getListStaff());
    };
  }, [dispatch, productID]);

  useEffect(() => {
    setComment(data);
    setCustomer(props.customer);
    setStaff(staffData);
  }, [data, props.customer, staffData]);
  return (
    <>
      <form action="" className="mb-5">
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Viết bình luận"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>

          <button
            type="submit"
            className="cart-btn mt-2 rounded-pill mt-1 view-all float-end"
          >
            {" "}
            <b>Gửi bình luận</b>{" "}
          </button>
        </div>
      </form>
      <>
        {load ? (
          <SpinnerCircular
            size={70}
            thickness={80}
            speed={150}
            color="rgb(255, 93, 0)"
            secondaryColor="rgb(47, 212, 234)"
            className="m-auto d-block"
          />
        ) : (
          <>
            {(comment || []).length == 0 ? (
              <h5 className="text-center p-3 ">
                {" "}
                <b>Sản phẩm chưa có bình luận...</b>{" "}
              </h5>
            ) : (
              <>
                <h4 className="mt-5">
                  <b href="" className="ms-2">
                    <small>
                      <i className="far fa-comments"></i>{" "}
                      {(comment || []).length} bình luận
                    </small>{" "}
                  </b>{" "}
                </h4>
                <CommentList
                  comment={comment}
                  customer={customer}
                  staff={staff}
                />
                <button className="cart-btn  rounded-pill mt-4 view-all m-auto d-block">
                  {" "}
                  <b>Xem Thêm bình luận</b>{" "}
                </button>{" "}
              </>
            )}
          </>
        )}
      </>
    </>
  );
};
export default Comment;
