import React, { useEffect } from 'react';
import { Layout, Tabs, Breadcrumb } from 'antd';
import './index.css'
import CatalogTable from './catalogTable';
import { getListCatalog } from '../../redux/actions/catalog';
import { getListProductCompany } from '../../redux/actions/productCompany';
import { useDispatch, useSelector } from 'react-redux';

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
                <TabPane tab="Loại sản phẩm" key="1">
                    <CatalogTable
                        data={catalogs?.catalogs}
                        productCompany={productCompany}
                        loading={catalogs.load}
                    />
                </TabPane>
            </Tabs>
            </Layout>
        </div>
     );
}

export default Catalog;