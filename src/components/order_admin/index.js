import React, { useEffect, useState } from 'react';
import { Layout, Tabs, Breadcrumb, Space, Badge } from 'antd';
import './index.css'
import OrderTable from './orderTable';
import { getListOrder, updateOrder } from '../../redux/actions/order';
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
    const Token = JSON.parse(localStorage.getItem("thelaptopworld_token"));
    const [tab, setTab] = useState([]);

    console.log('order :>> ', order);

    useEffect(()=>{
        dispatch(getListOrder());
    },[dispatch, order.status]);

    useEffect(() => {
        let tab = [];
        statusOrder?.forEach((item) => {
            if (item.role.filter(e => e === Token.role).length > 0) {
                tab.push(<TabPane tab={TabTitle(item.status, mapDataByStatus(order?.data, item.index).totalRecords)} key={item.index}>
                    <OrderTable
                        data={mapDataByStatus(order?.OrderList?.data, item.index).data}
                        loading={order.loadOrderList}
                        statusTitle={item.status}
                        status={item.index}
                        updateStatus={updateStatus}
                    />
                </TabPane>);
            }
        })
        setTab(tab);
    }, [order?.OrderList?.data, order.status ])

    const updateStatus = (id, status) => {
        dispatch(updateOrder({
            id: id,
            body: {
                TrangThai: status + 1,
            }
        }));
        dispatch(getListOrder());
    }
    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Quản lí đơn hàng</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background catalog">
                <Tabs type="card">
                    { 
                        tab
                    }
                </Tabs>
            </Layout>
        </div>
     );
}

export default Order;