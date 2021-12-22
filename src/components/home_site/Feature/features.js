/* eslint-disable eqeqeq */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ListFeatures from "./list-feature";
import { Spin } from "antd";
import Macimage from '../Macbookpro.png'

const Features = () => {
  const { load, data } = useSelector((state) => state.products);
  return (
    <>
      <Spin spinning={load}>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-3">
          {(data || [])
            .sort(function (a, b) {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .slice(0, 6)
            .map((e) => (e.AnHien == true ? <ListFeatures data={e} /> : null))}
        </div>
      </Spin>
      <div className=" text-sm-end text-white  rounded">
        <div className="p-lg-5 text-end my-5 bannerfeatures bg-info">
          <div className="row">
            <div className="col-sm-6">
              <div className="me-5">
                <img
                  src={Macimage}
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-sm-6 ">
              <h1 className="mt-4 fw-bolder text-white text-center">
                Bringing Smart{" "}
                <p>
                  to Safety{" "}
                  <Link
                    to="/san-pham"
                    className="text-info bg-white fw-bolder btn custom-btn "
                  >
                    <span className="p-3">Sale đến 2.000.000vnđ</span>
                  </Link>
                </p>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
