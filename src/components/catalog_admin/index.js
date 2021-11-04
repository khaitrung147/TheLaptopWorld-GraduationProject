import React, { useEffect } from 'react';
import { Layout, Tabs, Breadcrumb, Space, Badge } from 'antd';
import './index.css'
import CatalogTable from './catalogTable';
import { getListCatalog } from '../../redux/actions/catalog';
import { getListProductCompany } from '../../redux/actions/productCompany';
import { useDispatch, useSelector } from 'react-redux';

function TabTitle(display_name, total_records) {
    return (
        <Space align='center'>
            {display_name}
            <Badge style={{ backgroundColor: '#fa8c16' }} count={total_records} overflowCount={99} />
        </Space>
    );
}

function mapDataByProductCompany(rootData, productCompanyId) {
    let data = rootData?.filter(e => e.HangSanXuat=== productCompanyId)
    return {
        data: data,
        totalRecords: data?.length
    }
}

function Catalog() {
    const { TabPane } = Tabs;
    const dispatch= useDispatch();
    const catalogs = useSelector(state => state.catalogs);
    const productCompany= useSelector(state => state.productCompany.productCompany);

    useEffect(()=>{
        dispatch(getListCatalog());
        dispatch(getListProductCompany());
    },[dispatch]);

    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Loại sản phẩm</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background catalog">
                <Tabs type="card">
                    {
                        productCompany?.map((item) => {
                            return <TabPane tab={TabTitle(item.TenHangSanXuat, mapDataByProductCompany(catalogs?.catalogs, item._id).totalRecords)} key={item._id}>
                                <CatalogTable
                                    data={mapDataByProductCompany(catalogs?.catalogs, item._id).data}
                                    productCompany={item.TenHangSanXuat}
                                    loading={catalogs.load}
                                />
                            </TabPane>
                        })
                    }
                </Tabs>
            </Layout>
        </div>
     );
}

export default Catalog;