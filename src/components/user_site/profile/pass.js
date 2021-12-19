import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { passCustomer } from "../../../redux/actions/customer";
import bcrypt from "bcryptjs";
function Pass() {
  const dispatch = useDispatch();
  const newPass = useRef();
  const rePass = useRef();
  if (localStorage.thelaptopworld_token) {
    var { userId } = JSON.parse(localStorage.thelaptopworld_token);
  }

  const updatePass = () => {
    const RePass = rePass.current.value;
    const NewPass = newPass.current.value;
    if (RePass != NewPass) {
      toast.error("Kiểm tra lại mật khẩu đã nhập !", {
        position: "top-center",
      });
    } else if (NewPass == "" || RePass == "") {
      toast.error("Vui lòng xác nhận đầy đủ thông tin !", {
        position: "top-center",
      });
    } else {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(RePass, salt);
      dispatch(passCustomer({ userId, hash }));
      toast.success("Cập nhật mật khẩu thành công", {
        position: "top-center",
      });
    }
  };
  return (
    <form action className="mt-5">
      <h3 className="fw-bold">Thay đổi mật khẩu</h3>
      <div className="row border p-3 rounded-3">
        <div className="col-xl-6 col-lg-6 form-group mt-4">
          <label htmlFor className="fw-bold">
            Mật khẩu mới
          </label>
          <input
            type="password"
            className="w-100 mt-3"
            id="exampleInputPassword1"
            ref={newPass}
          />
        </div>
        <div className="col-xl-6 col-lg-6 form-group mt-4">
          <label htmlFor className="fw-bold">
            Xác nhận mật khẩu mới
          </label>
          <input
            type="password"
            className="w-100 mt-3"
            id="exampleInputPassword1"
            ref={rePass}
          />
        </div>
        <div className style={{ width: "13rem" }}>
          <button
            className="btn  rounded-pill mt-4 view-all "
            type="button"
            onClick={updatePass}
          >
            <b>Cập nhật</b>
          </button>
        </div>
      </div>
    </form>
  );
}
export default Pass;
