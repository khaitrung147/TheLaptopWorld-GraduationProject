import React, { useEffect, useState } from "react";
import ProductColumn from "./productCulumn";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct, getDetailProduct } from "../../redux/actions/product";
import { SpinnerCircular } from "spinners-react";

function Products() {
  const products = useSelector((state) => state.products.data);
  const productDetail = useSelector((state) => state.detailProduct.data);
  const loading = useSelector((state) => state.products.load);
  const [view, setView] = useState(false);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getDetailProduct("hp-elitebook-840"));
  }, [dispatch]);

  useEffect(() => {
    setData(products);
  }, [products]);

  const changeViewColumn = () => {
    setView(true);
  };
  const changeViewList = () => {
    setView(false);
  };

  return (
    <div>
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

        <select className="form-select rounded-pill ms-xl-3 ms-lg-3 ms-md-3 fw-bold bg-light ">
          <option value>Sắp xếp</option>
          <option value>Giá tăng dần</option>
          <option value>Giá giảm dần</option>
        </select>
      </div>

      <div className="row ">
        {loading ? (
          <SpinnerCircular
            size={90}
            thickness={80}
            speed={150}
            color="rgb(255, 93, 0)"
            secondaryColor="rgb(47, 212, 234)"
            className="m-auto"
          />
        ) : data && (data || []).length > 0 ? (
          <>
            {" "}
            {(data || []).map((e) => (
              <ProductColumn data={e} view={view} />
            ))}
          </>
        ) : (
          <p>no data</p>
        )}
      </div>
    </div>
  );
}

export default Products;
