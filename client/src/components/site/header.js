/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

import { getListCatalog } from "../../redux/actions/catalog";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getListCatalog();
  }

  render() {
    const { catalogs, load } = this.props.catalogs;
    console.log("load :>> ", load);
    console.log("catalogs :>> ", catalogs);

    return (
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand mt-2" href="#">
              <h1>BRAND</h1>{" "}
            </a>
            <button
              className="navbar-toggler bg-orange"
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
                  <a
                    className="text-decoration-none active text-uppercase fw-bold"
                    aria-current="page"
                    href="#"
                  >
                    shop
                  </a>
                </li>
              </ul>

              <div className="d-flex align-items-center justify-content-center">
                <a href="" className="me-4 text-decoration-none  cart">
                  <i className="fas fa-shopping-cart"></i>
                </a>

                <a
                  href=""
                  className="rounded-pill bg-orange fw-bold btn custom-btn"
                >
                  <span className="p-3">Đăng nhập / Đăng ký</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container mt-xl-5 mt-lg-5 mt-md-0 mt-sm-0 shopnow py-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 content1 text-light ">
              <h1>Apple Macbook Air MQD32 Laptop</h1>
              <p className="fw-bold">
                Hệ thống cửa hàng cung cấp Laptop toàn quốc , với những mẫu mã
                sản phẩm đa dạng và đảm bảo uy tín chất lượng sản phầm
              </p>
              <a
                href=""
                className="rounded-pill bg-orange fw-bold btn custom-btn mt-4"
              >
                <span className="p-3">Mua hàng ngay</span>
              </a>
            </div>

            <div className="col-xl-6 col-lg-6 text-light">
              <div className="white-circle "></div>
              <div className="orange-circle rounded-circle"></div>
              <div className="w-75 content2">
                <img
                  className="w-100"
                  src="https://pngimg.com/uploads/macbook/macbook_PNG101747.png"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catalogs: state.catalogs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getListCatalog: (params) => dispatch(getListCatalog(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
