import React, { useEffect } from 'react';
import { Layout, Tabs, Breadcrumb, Space, Badge } from 'antd';
import './index.css'
import OrderTable from './orderTable';
import { getListOrder } from '../../redux/actions/order';
import { useDispatch, useSelector } from 'react-redux';
import { statusOrder } from './orderConfig';

function TabTitle(display_name, total_records) {
    return (
        <Space align='center'>
            {display_name}
            <Badge style={{ backgroundColor: '#fa8c16' }} count={total_records} overflowCount={99} />
        </Space>
    );
}

function mapDataByStatus(rootData, status) {
    let data = rootData?.filter(e => e.TrangThai === status)
    return {
        data: data,
        totalRecords: data?.length
    }
}

function Order() {
    const { TabPane } = Tabs;
    const dispatch= useDispatch();
    const order = useSelector(state => state.order);

    useEffect(()=>{
        dispatch(getListOrder());
    },[dispatch]);

    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Quản lí đơn hàng</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background catalog">
                <Tabs type="card">
                    {
                        statusOrder?.map((item) => {
                            return <TabPane tab={TabTitle(item.status, mapDataByStatus(order?.data, item.index).totalRecords)} key={item.index}>
                                <OrderTable
                                    data={mapDataByStatus(order?.data, item.index).data}
                                    loading={order.load}
                                    status={item.status}
                                />
                            </TabPane>
                        })
                    }
                </Tabs>
            </Layout>
        </div>
     );
}

export default Order;