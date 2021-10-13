import React from 'react';
import { Layout, Tabs, Breadcrumb } from 'antd';
import './index.css'
import CatalogTable from './catalogTable';

function Catalog() {
    const { TabPane } = Tabs;
    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Loại sản phẩm</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background catalog">
            <Tabs type="card">
                <TabPane tab="Laptop" key="1">
                    <CatalogTable />
                </TabPane>
                <TabPane tab="Phụ kiện" key="2">
                    <p>Content of Tab Pane 2</p>
                    <p>Content of Tab Pane 2</p>
                    <p>Content of Tab Pane 2</p>
                </TabPane>
            </Tabs>
            </Layout>
        </div>
     );
}

export default Catalog;