import React from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import "./index.css";
function Sidebar() {
  const { path } = useRouteMatch();

  const LogOut = () => {
    localStorage.removeItem("thelaptopworld_token");
    localStorage.removeItem("cart");
    window.location.replace("/");
  };
  return (
    <div className="col-xl-2 col-lg-3 col-md-3 profile-tabs">
      <div className="border-start">
        <div className="border-child">
          <p className="ms-3">
            <Link
              to={"/ho-so"}
              className={
                path === "/ho-so"
                  ? "text-decoration-none fw-bold"
                  : "text-decoration-none "
              }
            >
              <i className="far fa-user" /> Tài khoản
            </Link>
          </p>
        </div>
        <p className="ms-3">
          <Link
            to={"/don-hang"}
            className={
              path === "/don-hang"
                ? "text-decoration-none fw-bold"
                : "text-decoration-none "
            }
          >
            <i className="fas fa-history" /> Lịch sử đặt hàng
          </Link>
        </p>
        <p className="ms-3">
          <Link
            to={"/yeu-thich"}
            className={
              path === "/yeu-thich"
                ? "text-decoration-none fw-bold"
                : "text-decoration-none "
            }
          >
            <i className="far fa-heart" /> Sản phẩm yêu thích
          </Link>
        </p>
      </div>
      <button className="log-out" onClick={LogOut}>
        Đăng xuất
      </button>
    </div>
  );
}
export default Sidebar;
