import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCatalog } from "../../redux/actions/catalog";
import { Slider, Checkbox, Form } from 'antd';
import { brandOptions, chipOptions, ramOptions, romOptions, cardOptions } from "./filterConfig";

const Filter = () => {
  const catalog = useSelector((state) => state.catalogs);
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCatalog());
  }, [dispatch]);

  function onChangePrice(value) {
    console.log('onChangePrice: ', value);
  }

  const formatter = (value) => {
    return `${value * 1000} vnđ`
  }

  function onChangeBrand(checkedValues) {
    console.log('onChangeBrand = ', checkedValues);
  }

  const onFormChange = (valueChange, allValue) => {
    console.log('value :>> ', allValue);
  }


  return (
    <div className='filter-product'>
      <Form form={form} onValuesChange={onFormChange}>
        <ul className="list-group">
          <h5 className="fw-bolder">Khoảng giá</h5>

          <li className="list-group-item brand ">
            <Form.Item name='price'>
              <Slider
                range
                step={5}
                onChangePrice={onChangePrice}
                defaultValue={[1, 100]}
                tipFormatter={formatter}
              />
            </Form.Item>
          </li>
        </ul>
        <ul className="list-group mt-3">
          <h5 className="fw-bolder">Thương hiệu</h5>
          <Form.Item name='brand'>
            <Checkbox.Group className='brand-checkbox' options={brandOptions} defaultValue={['Apple']} onChange={onChangeBrand} />
          </Form.Item>
        </ul>
        <ul className="list-group cauhinh mt-3">
          <h5 className="fw-bolder">Cấu hình</h5>

          <li>
            <h6>CPU</h6>
            <Form.Item name='cpu'>
              <Checkbox.Group className='brand-checkbox' options={chipOptions} defaultValue={['Core I5']} onChange={onChangeBrand} />
            </Form.Item>
          </li>
          <li>
            <h6>RAM</h6>
            <Form.Item name='ram'>
              <Checkbox.Group className='brand-checkbox' options={ramOptions} defaultValue={['4']} onChange={onChangeBrand} />
            </Form.Item>
          </li>
          <li>
            <h6>Card đồ hoạ</h6>
            <Form.Item name='card'>
              <Checkbox.Group className='brand-checkbox' options={cardOptions} defaultValue={['Core I5']} onChange={onChangeBrand} />
            </Form.Item>
          </li>
          <li>
            <h6>Bộ nhớ trong</h6>
            <Form.Item name='rom'>
              <Checkbox.Group className='brand-checkbox' options={romOptions} defaultValue={['Core I5']} onChange={onChangeBrand} />
            </Form.Item>
          </li>

        </ul>
      </Form>
    </div>
  );
};

export default Filter;
