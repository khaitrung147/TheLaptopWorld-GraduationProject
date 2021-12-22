import React, { useState, useEffect } from "react";
import Breadcrumb from "../../constants/breadcrumb";
import Products from "./product";
import "./index.css";
import { useHistory } from "react-router-dom";
import { filterProduct } from "../../redux/actions/product";
import qs from "query-string";
import Filter from "./filter";
import { useDispatch, useSelector } from "react-redux";
const Product = () => {
  const param = new URLSearchParams(window.location.search);
  const queryParams = qs.parse(window.location.search);
  const history = useHistory();

  let page = param.get("page");
  let sort = param.get("sort");
  let filter = param.get("filter");

  if (!page) {
    page = 1;
  }
  if (!sort) {
    sort = "desc";
  }
  if (!filter) {
    filter = "null";
  }
  const [key, setKey] = useState({
    Page: page,
    Filter: filter,
    Sort: sort,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      filterProduct({
        currentPage: key.Page,
        filter: key.Filter,
        sort: key.Sort,
      })
    );
  }, [dispatch, sort, key.Page, key.Sort, filter, key.Filter]);

  const CancelFilter = () => {
    console.log(queryParams);
    const newQueries = { ...queryParams, filter: null };
    history.push({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Filter: "null",
    });
  };

  const FilterKey = (i) => {
    const newQueries = { ...queryParams, filter: i , page : 1 };
    history.push({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Page : 1,
      Filter: i,
    });
  };
  const selectPage = (i) => {
    const newQueries = { ...queryParams, page: i };
    history.push({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Page: i,
    });
  };
  const nextPage = () => {
    const newQueries = { ...queryParams, page: parseInt(page) + 1 };
    history.push({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Page: parseInt(page) + 1,
    });
  };
  const prevPage = () => {
    const newQueries = { ...queryParams, page: parseInt(page) - 1 };
    history.push({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Page: parseInt(page) - 1,
    });
  };

  const Sort = (i) => {
    const newQueries = { ...queryParams, sort: i };
    history.push({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Sort: i,
    });
  };
  return (
    <main>
      <div className="custom-bg container">
        <div className=" pt-3">
          <Breadcrumb
            key=""
            currentPage="Sản phẩm"
            listBread={[
              {
                path: "/",
                pageName: "Trang chủ",
              },
            ]}
          />
        </div>

        <div className=" mt-2 mb-5">
          <div className="row">
            <div className="col-md-12 col-xl-3 col-lg-3 col-sm-12 mb-3 filter">
              <Filter filterIndex={FilterKey} cancelFilter={CancelFilter} />
            </div>
            <div className="col-md-12 col-xl-9 col-lg-9 col-sm-12 ">
              <Products
                selectPage={selectPage}
                nextPage={nextPage}
                prevPage={prevPage}
                Sort={Sort}
                key=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
