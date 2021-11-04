import React, { useEffect } from 'react';
import { Layout, Tabs, Breadcrumb } from 'antd';
import './index.css'
import CatalogTable from './productCompanyTable';
import { getListProduct } from '../../redux/actions/product';
import { getListProductCompany } from '../../redux/actions/productCompany';
import { useDispatch, useSelector } from 'react-redux';

function ProductCompany() {
    const { TabPane } = Tabs;
    const dispatch= useDispatch();
    const products = useSelector(state => state.products);
    const productCompany= useSelector(state => state.productCompany);

    useEffect(()=>{
        dispatch(getListProduct());
        dispatch(getListProductCompany());
    },[dispatch]);

    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Hãng sản xuất</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background product-company">
            <Tabs type="card">
                <TabPane tab="Hãng sản xuất" key="1">
                    <CatalogTable
                        products={products?.data}
                        data={productCompany?.productCompany}
                        loading={productCompany.load}
                    />
                </TabPane>
            </Tabs>
            </Layout>
        </div>
     );
}

export default ProductCompany;