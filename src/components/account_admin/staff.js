import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import './index.css'
import StaffTable from './staffTable';
import RegisterCustomerForm from './registerCustomerForm';
import { getListStaff } from '../../redux/actions/staff';
import { useDispatch, useSelector } from 'react-redux';

function Staff() {
    const dispatch= useDispatch();
    const staffs = useSelector(state => state.staff);

    useEffect(()=>{
        dispatch(getListStaff());
    },[dispatch]);

    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Tài khoản nhân viên</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background customer">
                <StaffTable
                    loading={staffs.load}
                    data={staffs?.data?.data}
                />
            </Layout>
            <Layout className="site-layout-background create-staff">
                <RegisterCustomerForm />
            </Layout>
        </div>
     );
}

export default Staff;