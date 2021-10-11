import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  const data = useSelector((state) => state);

  console.log(data);
  return (
    <div className="row ">
      <div className="col-xl-3 col-md-4 col-sm-6 col-6 product-box mb-3">
        asd
      </div>
    </div>
  );
}

export default ProductList;
