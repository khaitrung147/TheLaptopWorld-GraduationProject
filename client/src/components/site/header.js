/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-wrapper-css">
        <nav className="navbar-css container">
          <div className="brand-and-icon-css">
            <a href="index.html" className="navbar-brand-css">
              <div className="w-100">
                <img
                  className="w-100 d-block"
                  src="./assets/images/logo.png"
                  alt=""
                />
              </div>
            </a>
            <button type="button" className="navbar-toggler-css h-25 m-auto">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="navbar-collapse-css">
            <ul className="navbar-nav-css">
              <li>
                <a href="#">
                  <h6>
                    <i className="fas fa-home me-1"></i>Trang chủ
                  </h6>
                </a>
              </li>

              <li>
                <a href="#" className="menu-link-css">
                  <h6>
                    <i className="fas fa-chevron-down me-1"></i>Laptop
                  </h6>
                </a>
                <div className="sub-menu-css">
                  <div className="sub-menu-item-css mb-4 ">
                    <h4>
                      <a
                        href="product.html"
                        className="submenu-item border-bottom"
                      >
                        <b>Tất cả</b>{" "}
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <a href="#" className="submenu-item">
                          Laptop Dell
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Laptop Asus
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Laptop HP
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Macbook
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="sub-menu-item-css mb-4 ">
                    <h4>
                      {" "}
                      <a href="" className="submenu-item border-bottom">
                        <b>Asus</b>{" "}
                      </a>{" "}
                    </h4>
                    <ul>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="sub-menu-item-css mb-4">
                    <h4>
                      {" "}
                      <a href="" className="submenu-item border-bottom">
                        <b>Asus</b>{" "}
                      </a>{" "}
                    </h4>
                    <ul>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="sub-menu-item-css mb-4">
                    <h4>
                      {" "}
                      <a href="" className="submenu-item border-bottom">
                        <b>Asus</b>{" "}
                      </a>{" "}
                    </h4>
                    <ul>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="sub-menu-item-css mb-4">
                    <h4>
                      {" "}
                      <a href="" className="submenu-item border-bottom">
                        <b>Asus</b>{" "}
                      </a>{" "}
                    </h4>
                    <ul>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" className="submenu-item">
                          Gaming
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <a href="cart.html" className="">
                  <h6>
                    <i className="fas fa-shopping-cart me-1"></i>Giỏ hàng
                  </h6>
                </a>
              </li>

              <li>
                <a href="form.html" className="">
                  <h6>
                    <i className="fas fa-user me-1"></i>Đăng nhập
                  </h6>
                </a>
              </li>

              <div className="input-group rounded seach-bar">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Tìm kiếm...  "
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
