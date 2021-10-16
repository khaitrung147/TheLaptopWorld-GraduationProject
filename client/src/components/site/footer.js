/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="text-center text-lg-start text-light ">
        <div className="">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Xem thêm thông tin tại:</span>
            </div>
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <div className=" text-md-center mb-4 w-50 foot-logo">
                    <a href="" className="">
                      <img
                        src="./assets/images/logo.png"
                        className="w-100"
                        alt=""
                      />
                    </a>
                  </div>
                  <p>
                    Copyright (C) 2020 <br />
                    Website: Thế giới LapTop | Số ĐKKD 0107273909 do Sở KHĐT
                    Thành phố Hồ Chí Minh cấp ngày 30/12/2015
                  </p>
                  <hr />
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
                  <p>
                    Chúng tôi cam kết sản phẩm chất lượng và đảm bảo uy tín về
                    thương hiệu
                  </p>
                  <hr />
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Cam kết</h6>
                  <p>
                    <b href="#!" className="text-reset">
                      + Giao hàng tận nơi
                    </b>
                  </p>
                  <p>
                    <b href="#!" className="text-reset">
                      + Bảo hành
                    </b>
                  </p>
                  <p>
                    <b href="#!" className="text-reset">
                      + Đổi trả nếu sản phẩm lỗi
                    </b>
                  </p>
                  <p>
                    <b href="#!" className="text-reset">
                      + Đền bù gấp đôi nếu sản phẩm không chính hãng
                    </b>
                  </p>
                  <hr />
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Kết nối</h6>
                  <p>
                    <i className="fas fa-home me-3"></i>Công viên phầm mên Quang
                    Trung , quận 12 , Thành phố Hồ Chí Minh
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    thegioilaptop113@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-4"
            // style="background-color: rgba(0, 0, 0, 0.05);"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            Created by:
            <b className="text-reset fw-bold" href="">
              {" "}
              The gioi Lap Top team{" "}
            </b>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
