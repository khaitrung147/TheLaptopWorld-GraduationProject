/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import ListCurrent from "./listCurrent";

const Products = () => {
  const { load, data } = useSelector((state) => state.products);

  const feature = data;
  return (
    <div className="row mt-5">
      <Spin spinning={load}>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-3">
          {(feature || [])
            .sort(function (a, b) {
              return new Date(a.createdAt) - new Date(b.createdAt);
            })
            .slice(0, 12)
            .map((e) => (e.AnHien == true ? <ListCurrent data={e} /> : null))}
        </div>
      </Spin>
    </div>
  );
};
export default Products;
