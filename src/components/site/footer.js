/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Logo from "./Logo.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="main-bg">
        <div className="container ">
          <div className="row">
            <div className="col-xl-4">
              <div className="w-100">
                <img src={Logo} alt="" />
                <p className="mt-3 fw-bold text-light">
                  All rights reserved to TGLT
                </p>
                <span className="fw-bold text-light">
                  Designed by TGLT team
                </span>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row">
                <div className="col-xl-4">
                  <p className="fw-bold">
                    <a href="" className="text-light">
                      Trang chủ
                    </a>
                  </p>
                  <p className="fw-bold">
                    <a href="" className="text-light">
                      Tin khuyến mãi
                    </a>
                  </p>
                </div>
                <div className="col-xl-4">
                  <p className="fw-bold">
                    <a href="/ve-chung-toi/#thuong-hieu" className="text-light">
                      Thương hiệu
                    </a>
                  </p>
                  <p className="fw-bold">
                    <a href="/ve-chung-toi/#chuyen-mon" className="text-light">
                      Chuyên môn
                    </a>
                  </p>
                  <p className="fw-bold">
                    <a href="/ve-chung-toi/#van-chuyen" className="text-light">
                      Vận chuyển
                    </a>
                  </p>
                  <span className="fw-bold">
                    <a  href="/ve-chung-toi/#bao-hanh" className="text-light">
                      Bảo hành
                    </a>
                  </span>
                </div>
                <div className="col-xl-4">
                  <p className="fw-bold">
                    <a href="" className="text-light">
                      Tuyển dụng
                    </a>
                  </p>
                  <p className="fw-bold">
                    <a href="" className="text-light">
                      Hệ thống bảo hành
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="float-end">
                <h5 className="fw-bold text-light">Quên mật khẩu </h5>
                <form className="">
                  <div className="search">
                    <input
                      type="email"
                      placeholder="example@gmail.com..."
                      name="search"
                      className="searchbar rounded-3"
                      required
                    />
                    <button
                      type="submit"
                      className="search_button bg-orange ms-2 rounded-3 text-light fw-bold border-0"
                    >
                      GO
                    </button>
                  </div>
                </form>
                <div className="mt-3">
                  <h5>
                    <a href="">
                      <i class="fab fa-facebook-square text-light"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="fab fa-twitter-square text-light ms-3"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="fab fa-github-square text-light ms-3"></i>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
