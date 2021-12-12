/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./Logo.png";
import { getListProduct } from "../../redux/actions/product";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
function Header() {
  const token = JSON.parse(localStorage.getItem("thelaptopworld_token"));
  const myRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const setSearchParam = () => {
    if (myRef.current.value === "") {
      toast.warn("Bạn chưa nhập từ khóa tìm kiếm !", {
        position: "top-center",
      });
    } else {
      history.push("/tim-kiem?key=" + myRef.current.value);
    }
  };
  const home = () => {
    dispatch(getListProduct());
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-bg">
      <div className="container py-2">
        <div className="navbar-brand" onClick={home}>
          <img src={Logo} />
        </div>
        <button
          className="navbar-toggler bg-orange "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="
                navbar-nav
                me-auto
                my-2 my-lg-0
                navbar-nav-scroll
                ms-xl-5
                text-center
                d-flex
                align-items-center
              "
          >
            <li className="nav-item">
              <div className="search">
                <input
                  ref={myRef}
                  type="text"
                  placeholder="Tìm kiếm trên TGLT"
                  className="searchbar"
                />
                <button
                  onClick={setSearchParam}
                  type="button"
                  className=" search_button"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </li>
            <li
              className="
                  nav-item
                  ms-xl-5 ms-lg-3 ms-md-0 ms-sm-0
                  mt-xl-0 mt-lg-0 mt-md-2 mt-sm-2
                "
            >
              <a
                className="text-decoration-none text-uppercase fw-bold"
                aria-current="page"
                href="#"
              >
                about
              </a>
            </li>
            <li
              className="
                  nav-item
                  ms-xl-4 ms-lg-3 ms-md-0 ms-sm-0
                  mt-xl-0 mt-lg-0 mt-md-2 mt-sm-2
                "
            >
              <a
                className="text-decoration-none active text-uppercase fw-bold"
                aria-current="page"
                href="#"
              >
                contact
              </a>
            </li>
            <li
              className="
                  nav-item
                  ms-xl-4 ms-lg-3 ms-md-0 ms-sm-0
                  mt-xl-0 mt-lg-0 mt-md-2 mt-sm-2
                "
            >
              <Link
                className="text-decoration-none active text-uppercase fw-bold"
                aria-current="page"
                to="/san-pham"
              >
                shop
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-center">
            <Link to="/gio-hang" className="me-4 text-decoration-none  cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            {!token ? (
              <Link
                to="/dang-nhap-site"
                className="rounded-pill bg-orange fw-bold btn custom-btn"
              >
                <span className="p-3">Đăng nhập / Đăng ký</span>
              </Link>
            ) : (
              <Link
                to="/"
                className="rounded-pill bg-orange fw-bold btn custom-btn"
              >
                <span>{token.userName}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
