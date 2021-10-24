import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListRate } from "../../redux/actions/rate";
import RateList from "./listrating";
import { SpinnerCircular } from "spinners-react";
const Rating = (props) => {
  const dispatch = useDispatch();
  const rate = useSelector((state) => state.rate.data);
  const load = useSelector((state) => state.rate.load);
  const productID = props.product._id;
  useEffect(() => {
    dispatch(getListRate(productID));
    return () => {
      dispatch(getListRate(productID));
    };
  }, [dispatch, productID]);

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
          {(rate || []).length == 0 ? (
            <h5 className="text-center p-3 custom">
              {" "}
              <b>Sản phẩm chưa có đánh giá...</b>{" "}
            </h5>
          ) : (
            <>
              <h4 className="mt-5">
                <b href="" className="text-decoration-underline ms-2 custom">
                  <small>
                    <i class="fas fa-award me-2"></i> {(rate || []).length} đánh
                    giá
                  </small>{" "}
                </b>{" "}
              </h4>
              <RateList data={rate} customer={props.customer} />

              <button className="cart-btn rounded-pill mt-4 view-all m-auto d-block">
                {" "}
                <b>Xem Thêm đánh giá</b>{" "}
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Rating;
