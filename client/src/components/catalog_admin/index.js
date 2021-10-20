import React, { useEffect } from 'react';
import { Layout, Tabs, Breadcrumb } from 'antd';
import './index.css'
import CatalogTable from './catalogTable';
import { getListCatalog } from '../../redux/actions/catalog';
import { useDispatch, useSelector } from 'react-redux';

function Catalog() {
    const { TabPane } = Tabs;
    const dispatch= useDispatch();
    const catalogs = useSelector(state => state.catalogs.catalogs);

    useEffect(()=>{
        dispatch(getListCatalog());
    },[]);

    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Loại sản phẩm</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background catalog">
            <Tabs type="card">
                <TabPane tab="Loại sản phẩm" key="1">
                    <CatalogTable data={catalogs} />
                </TabPane>
            </Tabs>
            </Layout>
        </div>
     );
}

export default Catalog;