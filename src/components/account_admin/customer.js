import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import './index.css'
import CustomerTable from './customerTable';
import { getListCustomer } from '../../redux/actions/customer';
import { useDispatch, useSelector } from 'react-redux';

function Customer() {
    const dispatch= useDispatch();
    const customers = useSelector(state => state.customer);

    useEffect(()=>{
        dispatch(getListCustomer());
    },[dispatch]);

    console.log('customers :>> ', customers);

    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Tài khoản khách hàng</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background customer">
                <CustomerTable
                    loading={customers.load}
                    data={customers.data}
                />
            </Layout>
        </div>
     );
}

export default Customer;