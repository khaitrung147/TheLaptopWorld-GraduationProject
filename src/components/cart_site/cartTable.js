import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../redux/actions/product";
import './style.css'

function CartTable() {
    let data = [];
    const dispatch = useDispatch();
    const cart = localStorage.cart;
    const products = useSelector((state) => state.products.data);
    console.log('products :>> ', products);
    if(cart){
        data = JSON.parse(cart);
    }

    const renderProduct = (Key, CauHinh) => {
        let product = products?.filter(e => e.Key === Key);
        let cauhinh= product[0]?.CauHinhSanPham.filter(e => e._id === CauHinh );
        return {
            name: product[0]?.TenSanPham,
            img: product[0]?.HinhAnh[0].Url,
            cauhinh: cauhinh[0]?._id,
            price: cauhinh[0]?.GiaSanPham
        };
    }
    
    useEffect(() => {
        dispatch(getListProduct());
    }, [dispatch]);
    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'productKey',
            key: 'productKey',
            render: (productKey, data) => <Link to={`/san-pham/${productKey}`}>{renderProduct(productKey, data.CauHinh).name}</Link>
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'productKey',
            key: 'price',
            render: (productKey, data) => <Link to={`/san-pham/${productKey}`}><img width='100px' src={renderProduct(productKey, data.CauHinh).img} /></Link> 
        },
        {
            title: 'Mã cấu Hình',
            dataIndex: 'productKey',
            key: 'price',
            render: (productKey, data) => `${renderProduct(productKey, data.CauHinh).cauhinh}`
        },
        {
            title: 'Giá',
            dataIndex: 'productKey',
            key: 'price',
            render: (productKey, data) => `${renderProduct(productKey, data.CauHinh).price}`
        },
        {
            title: 'Số lượng',
            dataIndex: 'SoLuong',
            key: 'SoLuong',
        },
    ];

    return (
        <>
        {
            data?
            <Table
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