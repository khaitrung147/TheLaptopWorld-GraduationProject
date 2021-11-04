import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCatalog } from "../../redux/actions/catalog";
const Filter = () => {
  const catalog = useSelector((state) => state.catalogs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCatalog());
  }, [dispatch]);

  return (
    <>
      <ul className="list-group">
        <h5 className="fw-bolder">Thương hiệu</h5>

        <li className="list-group-item brand d-flex justify-content-between align-items-center fw-bold">
          Apple
          <span className="badge rounded-pill">(14)</span>
        </li>
      </ul>

      <ul className="list-group mt-3">
        <h5 className="fw-bolder">Cấu hình</h5>

        <div className="form-check w-100 list-group-item config d-flex align-items-center">
          <input
            className="form-check"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label w-100 fw-bold ms-2"
            htmlFor="flexCheckDefault"
          >
            i5
            <span className="badge rounded-pill float-end">(14)</span>
          </label>
        </div>
      </ul>
    </>
  );
};

export default Filter;
