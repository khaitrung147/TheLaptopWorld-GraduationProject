/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { infoCustomer } from "../../../redux/actions/customer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Info() {
  const { data } = useSelector((state) => state.customerDetail);
  const phone = useRef();
  const name = useRef();
  const email = useRef();
  const dispatch = useDispatch();
  if (localStorage.thelaptopworld_token) {
    var { userId } = JSON.parse(localStorage.getItem("thelaptopworld_token"));
  }

  const remail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const updateInfo = () => {
    const body = {
      Phone: phone.current.value,
      Name: name.current.value,
      Email: email.current.value,
    };
    const re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (
      phone.current.value == "" ||
      name.current.value == "" ||
      email.current.value == ""
    ) {
      toast.error("Vui lòng xác nhận đầy đủ thông tin !", {
        position: "top-center",
      });
    } else if (re.test(phone.current.value) == false) {
      toast.error("Số điện thoại không hợp lệ !", {
        position: "top-center",
      });
    } else if (remail.test(email.current.value) == false) {
      toast.error("Email không hợp lệ !", {
        position: "top-center",
      });
    } else {
      dispatch(infoCustomer({ userId, body }));
      toast.success("Cập nhật hồ sơ thành công !", {
        position: "top-center",
      });
    }
  };
  return (
    <form action>
      <h3 className="fw-bold">Thông tin tài khoản</h3>
      <div className="row border p-3 rounded-3">
        <div className="col-xl-6 col-lg-6">
          <div className="change-ava">
            <div className="w-25">
              {data ? (
                data.Avatar === "NULL" ? (
                  <img
                    className="w-100 rounded-circle"
                    src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                    alt
                  />
                ) : (
                  <img className="w-100 rounded-circle" src={data.Avatar} alt />
                )
              ) : null}
            </div>
            <label className="choose">
              <input type="file" name="avatar" disabled />{" "}
              <span className="fw-bold rounded-pill ms-3">
                Đổi ảnh đại diện{" "}
                <b className="text-decoration-underline">
                  (* hiện tại chưa cập nhật)
                </b>
              </span>
            </label>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 form-group mt-4">
          <label htmlFor className="fw-bold">
            Số điện thoại
          </label>
          <input
            type="tel"
            className="w-100 mt-3"
            id="exampleInputPassword1"
            defaultValue={data ? data.Phone : null}
            ref={phone}
          />
        </div>
        <div className="col-xl-6 col-lg-6 form-group mt-4">
          <label htmlFor className="fw-bold">
            Họ tên
          </label>
          <input
            type="text"
            className="w-100 mt-3"
            id="exampleInputPassword1"
            defaultValue={data ? data.TenKhachHang : null}
            ref={name}
          />
        </div>
        <div className="col-xl-6 col-lg-6 form-group mt-4">
          <label htmlFor className="fw-bold">
            Email
          </label>
          <input
            type="email"
            className="w-100 mt-3"
            id="exampleInputPassword1"
            defaultValue={data ? data.Email : null}
            ref={email}
          />
        </div>
        <div className style={{ width: "13rem" }}>
          <button
            className="btn rounded-pill mt-4 view-all "
            type="button"
            onClick={updateInfo}
          >
            <b>Cập nhật</b>
          </button>
        </div>
      </div>
    </form>
  );
}
export default Info;
