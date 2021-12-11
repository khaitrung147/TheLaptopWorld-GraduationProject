import React, { useEffect } from "react";
import Breadcrumb from "../../constants/breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../../redux/actions/product";
import ListSearch from "./listSearchResult";

function Search() {
  const keyParam = new URLSearchParams(window.location.search);
  const result = keyParam.get("key");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.searchProduct);
  useEffect(() => {
    dispatch(searchProduct(result));
  }, [dispatch, result]);
  return (
    <main>
      <div className="container">
        <div className="pt-3">
          <Breadcrumb
            key=""
            currentPage="Tìm kiếm laptop"
            listBread={[
              {
                path: "/",
                pageName: "Trang chủ",
              },
            ]}
          />
        </div>
        {!result ? (
          <div style={{ margin: "5rem 0 18rem 0" }}>
            <h2 className="text-center">Hãy nhập từ khóa tìm kiếm !</h2>
          </div>
        ) : (
          <div className="mt-5">
            <h2>
              Kết quả từ khóa:{" "}
              <i style={{ textDecoration: "underline", color: "#2fd4ea" }}>
                {result}
              </i>
            </h2>
            {data ? (
              data.status === "null" ? (
                <div style={{ margin: "0 0 17rem 0" }}>
                  <h5 className="mt-4">Không tìm được sản phẩm</h5>
                </div>
              ) : (
                <div className="mt-5 mb-5">
                  <h4>
                    <span
                      className="fw-bold"
                      style={{ textDecoration: "underline" }}
                    >
                      {(data || []).length}
                    </span>{" "}
                    sản phẩm
                  </h4>
                  <div className="row">
                    {data.map((e) => (
                      <ListSearch data={e} />
                    ))}
                  </div>
                </div>
              )
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Search;
