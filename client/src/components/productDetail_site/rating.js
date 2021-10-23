import React, { useEffect, useState } from "react";
const Rating = () => {
  return (
    <>
      <form action="" className="mb-5">
        <div className="form-group">
          <div className="float-end rating ">
            <label>
              <input type="radio" name="stars" value="1" required />
              <span class="icon">
                <i className="fas fa-star"></i>
              </span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" required />
              <span class="icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" required />
              <span class="icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" required />
              <span class="icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
            </label>
            <label>
              <input
                type="radio"
                class="form-check-input"
                name="stars"
                value="5"
                required
              />
              <span class="icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
            </label>
          </div>

          <textarea
            className="form-control"
            placeholder="Viết đánh giá"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>

          <button
            type="submit"
            className="cart-btn mt-2 rounded-pill mt-1 view-all float-end"
          >
            {" "}
            <b>Gửi đánh giá</b>{" "}
          </button>
        </div>
      </form>

      <div className="row">
        <h4 className="mt-5">
          <b>
            5 <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star  text-warning"></i>
            <i className="fas fa-star  text-warning"></i>
            <i className="fas fa-star  text-warning"></i>
            <i className="fas fa-star  text-warning"></i>
            <b href="" className="text-decoration-underline ms-2">
              <small>7 đánh giá</small>{" "}
            </b>{" "}
          </b>
        </h4>
        <div
          className="col-xl-2 col-md-2 col-sm-2 d-block m-auto"
          style={{ width: "6rem" }}
        >
          <img
            className="w-100 rounded-circle"
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt=""
          />
        </div>
        <div className="col-xl-10 col-md-10 col-sm-10">
          <div>
            {" "}
            <i className="fas fa-star  text-warning"></i>
            <i className="fas fa-star  text-warning"></i>
            <i className="fas fa-star  text-warning"></i>
            <i className="fas fa-star  text-warning"></i>
            <i className="fas fa-star  text-warning"></i>
            <span className="ms-3">
              <small className="fw-bold">Trần văn C</small>{" "}
            </span>{" "}
          </div>

          <p>
            Giá tiền đi đôi với chất lượng: + Máy đẹp, ngon nghẻ + Các bạn nhân
            viên tư vấn nhiệt tình và đúng theo yêu cầu khách hàng, không phải
            kiểu dí khách mua máy như một số bên khác. Mua cho nhiều anh em bạn
            bè máy ở đây rồi đến giờ vẫn chưa gặp vấn đề gì!
          </p>
          <b>19/07/2020 20:06</b>
          <hr />
        </div>
      </div>
      <button className="cart-btn rounded-pill mt-4 view-all m-auto d-block">
        {" "}
        <b>Xem Thêm đánh giá</b>{" "}
      </button>
    </>
  );
};
export default Rating;
