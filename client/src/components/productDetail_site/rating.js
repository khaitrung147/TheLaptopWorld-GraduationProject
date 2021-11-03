import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListRate, postRate } from "../../redux/actions/rate";
import { toast } from "react-toastify";
import RateList from "./listrating";
import { SpinnerCircular } from "spinners-react";
import { getListOrder } from "../../redux/actions/order";

const Rating = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rate.data);
  const load = useSelector((state) => state.rate.load);
  const order = useSelector((state) => state.order.data);
  const productID = props.product._id;
  const postLoad = useSelector((state) => state.rate.postload);
  const status = useSelector((state) => state.rate.status);
  const [accessRate, setAccess] = useState();
  useEffect(() => {
    dispatch(getListRate(productID));
    if (localStorage.idUser) {
      dispatch(getListOrder(localStorage.idUser));
    }
  }, [dispatch, productID]);

  useEffect(() => {
    (order || []).map((e) => {
      (e.SanPham || []).map((msp) => {
        if (msp.MaSanPham == productID) {
          setAccess(e._id);
        }
      });
    });
  }, [order, productID]);

  useEffect(() => {
    if (status == true) {
      dispatch(getListRate(productID));
    }
  }, [dispatch, status, productID]);

  const UnLogin = () => {
    toast.error("Đăng nhập để gửi đánh giá !", { position: "top-center" });
  };

  const formValue = useRef();
  const PostRating = () => {
    const star = document.getElementsByName("stars");
    let number = [];
    for (let i = 0; i < star.length; i++) {
      if (star[i].checked) {
        number.push(star[i].value);
      }
    }
    const body = {
      MaSanPham: productID,
      MaKhachHang: localStorage.idUser,
      MaDonHang: accessRate,
      Rate: Number(number),
      NoiDungDanhGia: formValue.current.value,
    };
    if (number.length == 0) {
      toast.warn("Chọn số sao !", { position: "top-center" });
    } else if (formValue.current.value == "") {
      toast.warn("Nhập nội dung đánh giá !", { position: "top-center" });
    } else {
      dispatch(postRate(body));
      toast.success("Cảm ơn bạn đã gửi đánh giá !", {
        position: "top-center",
      });
    }
    formValue.current.value = "";
  };

  return (
    <>
      <form action="" className="mb-5">
        <div className="form-group">
          <div className="float-end rating ">
            <label>
              <input type="radio" name="stars" value="1" />
              <span class="icon">
                <i className="far fa-star"></i>
              </span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" />
              <span class="icon">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" />
              <span class="icon">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" />
              <span class="icon">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
            </label>
            <label>
              <input
                type="radio"
                class="form-check-input"
                name="stars"
                value="5"
              />
              <span class="icon">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
            </label>
          </div>

          <textarea
            className="form-control"
            placeholder="Viết đánh giá"
            id="exampleFormControlTextarea1"
            rows="3"
            ref={formValue}
          ></textarea>

          {!localStorage.idUser ? (
            <button
              type="button"
              className="cart-btn mt-2 rounded-pill mt-1 px-3 py-2 float-end fw-bold"
              onClick={() => UnLogin()}
            >
              {" "}
              Gửi đánh giá{" "}
            </button>
          ) : accessRate == undefined ? (
            <button
              type="button"
              className="cart-btn mt-2 rounded-pill mt-1 px-3 py-2 float-end fw-bold"
              disabled
              style={{ cursor: "no-drop" }}
            >
              {" "}
              Gửi đánh giá{" "}
            </button>
          ) : (
            <>
              {postLoad ? (
                <i className=" mt-2  mt-1 px-3 py-2 float-end fw-bold"> ...</i>
              ) : (
                <button
                  type="button"
                  className="cart-btn mt-2 rounded-pill mt-1 px-3 py-2 float-end fw-bold"
                  onClick={() => PostRating()}
                >
                  {" "}
                  Gửi đánh giá{" "}
                </button>
              )}
            </>
          )}
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
          {(data || []).length == 0 ? (
            <h5 className="text-center p-3 ">
              {" "}
              <b>Sản phẩm chưa có đánh giá...</b>{" "}
            </h5>
          ) : (
            <>
              <h4 className="mt-5">
                <b href="" className=" ms-2">
                  <small>
                    <i class="fas fa-award me-2"></i> {(data || []).length} đánh
                    giá
                  </small>{" "}
                </b>{" "}
              </h4>
              <RateList rate={data} customer={props.customer} />

              <button className="cart-btn rounded-pill mt-4 px-3 py-2 m-auto d-block fw-bold">
                {" "}
                Xem Thêm đánh giá{" "}
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Rating;
