import React, { useEffect, useState } from 'react';
import CartTable from './cartTable';
import { Alert } from 'antd';
import './style.css'
import { CarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../redux/actions/product";

function Cart() {
    const dispatch = useDispatch();
    let data = [];
    const cart = localStorage.cart;
    const products = useSelector((state) => state.products.data);
    const loading = useSelector(state=> state.products.load);
    const [total, setTotal] = useState(0);
    if(cart){
        data = JSON.parse(cart);
    }
    const renderProduct = (Key, CauHinh, SoLuong) => {
        if(data[0]){
            let product = products?.filter(e => e.Key === Key);
            if(product){
                let cauhinh= product[0]?.CauHinhSanPham.filter(e => e._id === CauHinh );
                return {
                    name: product[0]?.TenSanPham,
                    img: product[0]?.HinhAnh[0].Url,
                    cauhinh: cauhinh[0]?._id,
                    price: cauhinh[0]?.GiaSanPham,
                    totalProduct: cauhinh[0]?.GiaSanPham * SoLuong
                };
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
    }

    const totalRecords = () => {
        let total= 0;
        if(data[0]){
            data.forEach(e => {
                let product = products?.filter(item => item.Key === e.Key);
                if(product){
                    let cauhinh = product[0]?.CauHinhSanPham.filter(e => e._id === e.CauHinh );
                    total += cauhinh?cauhinh[0].GiaSanPham * e.SoLuong:0;
                }
            })
            console.log('total :>> ', total);
            setTotal(total);
        }
        else{
            setTotal(0);
        }
    }
    
    useEffect(() => {
        totalRecords();
        dispatch(getListProduct());
    }, [dispatch]);

    return ( 
        <>
            <div className='cart-page container my-5 text-center'>
                <h2>Giỏ hàng</h2>
                <div className='page-center'>
                    <CartTable
                        data={data}
                        renderProduct={renderProduct}
                        loading={loading}
                    />
                    <div className='row justify-content-between'>
                        <div className='col-5 mt-3'>
                            <Alert
                                message="Hình thức thanh toán"
                                description="Hiện tại shop chỉ hỗ trợ hình thức thanh toán COD (thanh toán khi nhận hàng)"
                                type="error"
                                icon={<CarOutlined />}
                                showIcon
                            />
                        </div>
                        <div className='col-4 mt-3'>
                            <h5>Tổng thanh toán: <span className='text-danger'>{total}</span></h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
     );
}

export default Cart;