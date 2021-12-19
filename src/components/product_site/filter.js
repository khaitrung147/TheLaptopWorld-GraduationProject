import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getListCatalog } from "../../redux/actions/catalog";

import { filter } from "./filterConfig";

const Filter = ({ filterIndex, cancelFilter }) => {
  const param = new URLSearchParams(window.location.search);
  let Filter = param.get("filter");
  const ref = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCatalog());
  }, [dispatch]);

  const selectLabel = (i) => {
    console.log(i);
    filterIndex(i);
  };
  const [check, setCheck] = useState(false);
  const Cancel = () => {
    setCheck(false);
    cancelFilter();
  };
  return (
    <div className="filter-product">
      <div className="cancel" onClick={Cancel}>
        Hủy lọc
      </div>
      <ul className="list-group mt-3">
        <div className="box-filter">
          <h5 className="fw-bolder">Thương hiệu</h5>
          {(filter.brandOptions || []).map((e) => (
            <label onClick={() => selectLabel(e.value)}>
              <input
                type="radio"
                name="check"
                defaultChecked={Filter === e.value ? true : check}
                ref={ref}
              />
              <div
                className={Filter === e.value ? "checked active" : "checked"}
              ></div>
              {e.label}
            </label>
          ))}
        </div>
        <div className="box-filter">
          <h5 className="fw-bolder">Chip</h5>
          {(filter.chipOptions || []).map((e) => (
            <label onClick={() => selectLabel(e.value)}>
              <input
                type="radio"
                name="check"
                defaultChecked={Filter === e.value ? true : check}
                ref={ref}
              />
              <div
                className={Filter === e.value ? "checked active" : "checked"}
              ></div>
              {e.label}
            </label>
          ))}
        </div>

        <div className="box-filter">
          <h5 className="fw-bolder">Ram</h5>
          {(filter.ramOptions || []).map((e) => (
            <label onClick={() => selectLabel(e.value)}>
              <input
                type="radio"
                name="check"
                defaultChecked={Filter === e.value ? true : check}
                ref={ref}
              />
              <div
                className={Filter === e.value ? "checked active" : "checked"}
              ></div>
              {e.label}
            </label>
          ))}
        </div>
        <div className="box-filter">
          <h5 className="fw-bolder">Ổ cứng</h5>
          {(filter.romOptions || []).map((e) => (
            <label onClick={() => selectLabel(e.value)}>
              <input
                type="radio"
                name="check"
                defaultChecked={Filter === e.value ? true : check}
                ref={ref}
              />
              <div
                className={Filter === e.value ? "checked active" : "checked"}
              ></div>
              {e.label}
            </label>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Filter;
