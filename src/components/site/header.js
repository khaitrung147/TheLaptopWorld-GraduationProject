/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

function Header() {
  const token = JSON.parse(localStorage.getItem("thelaptopworld_token"));
  console.log(token);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-bg">
      <div className="container py-2">
        <Link className="navbar-brand" to="/">
          <img src={Logo} />
        </Link>
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
              <form className="">
                <div className="search">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="search"
                    className="searchbar"
                    required
                  />
                  <button type="submit" className="search_button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
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
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/gio-hang" className="me-4 text-decoration-none  cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              {!token ? (
                <Link
                  to="/dang-nhap-site"
                  className="rounded-pill bg-orange fw-bold btn custom-btn"
                >
                  <span className="p-3">Đăng nhập</span>
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
      </div>
    </nav>
  );
}

export default Header;
