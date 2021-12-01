import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import './style.css'

function CartTable(props) {
    const { renderProduct, data, loading } = props
    
    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'productKey',
            key: 'productKey',
            render: (productKey, data) => <Link to={`/san-pham/${productKey}`}>{renderProduct(productKey, data.CauHinh, data.SoLuong)?.name}</Link>
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'productKey',
            key: 'price',
            render: (productKey, data) => <Link to={`/san-pham/${productKey}`}><img width='100px' src={renderProduct(productKey, data.CauHinh, data.SoLuong)?.img} /></Link> 
        },
        {
            title: 'Mã cấu Hình',
            dataIndex: 'productKey',
            key: 'price',
            render: (productKey, data) => <>{renderProduct(productKey, data.CauHinh, data.SoLuong)?.cauhinh}</>
        },
        {
            title: 'Giá',
            dataIndex: 'productKey',
            key: 'price',
            render: (productKey, data) => <>{renderProduct(productKey, data.CauHinh, data.SoLuong)?.price}</>
        },
        {
            title: 'Số lượng',
            dataIndex: 'SoLuong',
            key: 'SoLuong',
        },
        {
            title: 'Thành tiền',
            dataIndex: 'productKey',
            key: 'totalProduct',
            render: (productKey, data) => <>{renderProduct(productKey, data.CauHinh, data.SoLuong)?.totalProduct}</>
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