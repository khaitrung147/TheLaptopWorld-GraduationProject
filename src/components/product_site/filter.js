import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCatalog } from "../../redux/actions/catalog";
import { Slider, Checkbox } from 'antd';
import { brandOptions, chipOptions, ramOptions, romOptions, cardOptions } from "./filterConfig";

const Filter = () => {
  const catalog = useSelector((state) => state.catalogs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCatalog());
  }, [dispatch]);

  function onChangePrice(value) {
    console.log('onChangePrice: ', value);
  }

  const formatter = (value) => {
    return  `${value*1000} vnđ`
  }

  function onChangeBrand(checkedValues) {
    console.log('onChangeBrand = ', checkedValues);
  }
  

  return (
    <div className='filter-product'>
      <ul className="list-group">
        <h5 className="fw-bolder">Khoảng giá</h5>

        <li className="list-group-item brand ">
          <Slider
            range
            step={5}
            onChangePrice={onChangePrice}
            defaultValue={[1, 100]}
            tipFormatter={formatter}
          />
        </li>
      </ul>
      <ul className="list-group mt-3">
        <h5 className="fw-bolder">Thương hiệu</h5>

        <Checkbox.Group className='brand-checkbox' options={brandOptions} defaultValue={['Apple']} onChange={onChangeBrand} />
      </ul>
      <ul className="list-group cauhinh mt-3">
        <h5 className="fw-bolder">Cấu hình</h5>

        <li>
          <h6>CPU</h6>
          <Checkbox.Group className='brand-checkbox' options={chipOptions} defaultValue={['Core I5']} onChange={onChangeBrand} />
        </li>
        <li>
          <h6>RAM</h6>
          <Checkbox.Group className='brand-checkbox' options={ramOptions} defaultValue={['4']} onChange={onChangeBrand} />
        </li>
        <li>
          <h6>Card đồ hoạ</h6>
          <Checkbox.Group className='brand-checkbox' options={cardOptions} defaultValue={['Core I5']} onChange={onChangeBrand} />
        </li>
        <li>
          <h6>Bộ nhớ trong</h6>
          <Checkbox.Group className='brand-checkbox' options={romOptions} defaultValue={['Core I5']} onChange={onChangeBrand} />
        </li>

      </ul>
    </div>
  );
};

export default Filter;
