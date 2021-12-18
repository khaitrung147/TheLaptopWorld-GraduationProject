import React, { useRef, useState } from "react";
import ProductColumn from "./productCulumn";
import { useSelector } from "react-redux";

import { Spin } from "antd";

function Products({ selectPage, nextPage, prevPage, Sort }) {
  const products = useSelector((state) => state.filterProduct.data);
  const loading = useSelector((state) => state.filterProduct.load);
  const [view, setView] = useState(false);
  const param = new URLSearchParams(window.location.search);
  let page = param.get("page");
  let sort = param.get("sort");
  const pageNumber = [];
  if (products) {
    if (products.totalPage <= 1) {
      pageNumber.push(0);
    } else {
      for (let i = 1; i <= products.totalPage; i++) {
        pageNumber.push(i);
      }
    }
  }
  if (!page) {
    page = 1;
  }

  const selectedValue = useRef();
  const changeViewColumn = () => {
    setView(true);
  };
  const changeViewList = () => {
    setView(false);
  };

  const SortIndex = () => {
    const sort = selectedValue.current.value;
    Sort(sort);
  };

  return (
    <Spin spinning={loading} size="middle" style={{ marginTop: "5rem" }}>
      <div className="left d-flex align-items-center ">
        <i
          className="list fas fa-bars  p-2 rounded-pill"
          style={
            view
              ? { background: "rgba(255, 94, 0, 0.26)" }
              : { background: "unset" }
          }
          onClick={() => changeViewColumn()}
        ></i>
        <i
          className="column fas fa-columns ms-xl-2 ms-lg-2 ms-md-2 p-2 rounded-pill"
          style={
            view
              ? { background: "unset" }
              : { background: "rgba(47, 212, 234, 0.295)" }
          }
          onClick={() => changeViewList()}
        ></i>

        <select
          onChange={SortIndex}
          ref={selectedValue}
          className="form-select rounded-pill ms-xl-3 ms-lg-3 ms-md-3 fw-bold bg-light "
        >
          <option value="desc" selected={sort === "desc" ? true : false}>
            Mới đến cũ
          </option>
          <option value="asc" selected={sort === "asc" ? true : false}>
            Cũ đến mới
          </option>
        </select>
      </div>
      <div className="row ">
        {products ? (
          (products.response || []).length == 0 ? (
            <div className="not-found">
              <img src="https://thinkpro.vn/images/graphics/Null.png" alt="" />
              <h4 className="fw-bold">Không tìm thấy sản phẩm</h4>
            </div>
          ) : (
            (products.response || []).map((e) => (
              <ProductColumn key={e._id} data={e} view={view} />
            ))
          )
        ) : null}
      </div>

      {/* pagination */}
      <div className="pagina-dots">
        {page <= 1 ? (
          <button disabled className="d-none">
            <i class="fas fa-chevron-left"></i>
          </button>
        ) : (
          <button onClick={prevPage}>
            <i class="fas fa-chevron-left"></i>
          </button>
        )}

        {pageNumber.map((e) =>
          e == 0 ? null : (
            <button
              className={parseInt(page) == e ? "active" : null}
              onClick={() => selectPage(e)}
            >
              {e}
            </button>
          )
        )}

        {products ? (
          page == products.totalPage || products.totalPage == 0 ? (
            <button disabled className="d-none">
              <i class="fas fa-chevron-right"></i>
            </button>
          ) : (
            <button onClick={nextPage}>
              <i class="fas fa-chevron-right"></i>
            </button>
          )
        ) : null}
      </div>
    </Spin>
  );
}

export default Products;
