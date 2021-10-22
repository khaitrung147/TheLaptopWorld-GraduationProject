import React, { useEffect, useState } from "react";
const Comment = () => {
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

      <div className="row ">
        <div
          className="col-xl-2 col-md-2 col-sm-2 d-block m-auto mt-5"
          style={{ width: "6rem" }}
        >
          <img
            className="w-100 rounded-circle"
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt=""
          />
        </div>
        <div className="col-xl-10 col-md-10 col-sm-10 mt-5">
          <b>19/07/2020 20:06</b>
          <span className="ms-3">
            <small className="fw-bold">Trần văn C</small>{" "}
          </span>{" "}
          <p>
            Giá tiền đi đôi với chất lượng: + Máy đẹp, ngon nghẻ + Các bạn nhân
            viên tư vấn nhiệt tình và đúng theo yêu cầu khách hàng, không phải
            kiểu dí khách mua máy như một số bên khác. Mua cho nhiều anh em bạn
            bè máy ở đây rồi đến giờ vẫn chưa gặp vấn đề gì!
          </p>
          <hr />
        </div>
      </div>
      <button className="cart-btn  rounded-pill mt-4 view-all m-auto d-block">
        {" "}
        <b>Xem Thêm bình luận</b>{" "}
      </button>
    </>
  );
};
export default Comment;
