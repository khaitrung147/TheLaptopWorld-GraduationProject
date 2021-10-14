import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCatalog } from "../../redux/actions/catalog";
const Filter = () => {
  const catalog = useSelector((state) => state.catalogs);
  console.log(catalog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCatalog());
  }, [dispatch]);
  const check = () => {
    let myElement = document.getElementById("#check");
    console.log(myElement);
  };
  return (
    <>
      <ul class="list-group">
        <h5 className="fw-bolder">Thương hiệu</h5>

        <li class="list-group-item brand d-flex justify-content-between align-items-center fw-bold">
          Apple
          <span class="badge rounded-pill">(14)</span>
        </li>
      </ul>

      <ul class="list-group mt-3">
        <h5 className="fw-bolder">Cấu hình</h5>

        <div class="form-check w-100 list-group-item config d-flex align-items-center">
          <input
            class="form-check"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            class="form-check-label w-100 fw-bold ms-2"
            for="flexCheckDefault"
          >
            i5
            <span class="badge rounded-pill float-end">(14)</span>
          </label>
        </div>
      </ul>
    </>
  );
};

export default Filter;
