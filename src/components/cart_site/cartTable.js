import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Table, Tag, Space, InputNumber, Form } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import './style.css'

function CartTable(props) {
    const { changeQuantity, data, loading } = props;

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: (name, data) => <Link to={`/san-pham/${data.Key}`}>{name}</Link>
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            key: 'img',
            render: (img, data) => <Link to={`/san-pham/${data.Key}`}><img width='100px' src={img} /></Link> 
        },
        {
            title: 'Mã cấu Hình',
            dataIndex: 'cauhinh',
            key: 'cauhinh',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: price => <>{price?.toLocaleString("vi-vn")}đ</>
        },
        {
            title: 'Số lượng',
            dataIndex: 'soluong',
            key: 'soluong',
            render: (soluong, data) =>
            <Form onFieldsChange={changeQuantity}>
                <Form.Item name={JSON.stringify({Key: data.Key, CauHinh: data.cauhinh})} initialValue={soluong}>
                    <InputNumber min={0} max={10}/>
                </Form.Item>
            </Form>
        },
        {
            title: 'Thành Tiền',
            dataIndex: 'total',
            key: 'total',
            render: total => <>{total.toLocaleString("vi-vn")}đ</>
        },
    ];

    return (
        <>
        {
            data?
            <Table
                loading={loading}
                className='cart-table'
                columns={columns}
                dataSource={data}
                pagination={false}
            />:null
        }
        </>
    );
}

export default CartTable;