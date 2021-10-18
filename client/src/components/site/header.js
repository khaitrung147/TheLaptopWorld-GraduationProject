/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    // const { catalogs, load } = this.props.catalogs;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <Link className="navbar-brand mt-2" to="/">
            <h1>BRAND</h1>{" "}
          </Link>
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
