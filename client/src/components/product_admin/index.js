import React, { useEffect } from 'react';
import { Layout, Tabs, Breadcrumb } from 'antd';
import './index.css'
import ProductTable from './productTable';
import { getListProduct } from '../../redux/actions/product';
import { getListCatalog } from '../../redux/actions/catalog';
import { getListProductCompany } from '../../redux/actions/productCompany';
import { useDispatch, useSelector } from 'react-redux';

function Catalog() {
    const { TabPane } = Tabs;
    const dispatch= useDispatch();
    const catalogs = useSelector(state => state.catalogs.catalogs);
    const products = useSelector(state => state.products);
    const productCompany= useSelector(state => state.productCompany.productCompany);

    useEffect(()=>{
        dispatch(getListProduct());
        dispatch(getListCatalog());
        dispatch(getListProductCompany());
    },[dispatch]);

    return ( 
        <div>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background product">
                <Tabs type="card">
                    {
                        productCompany?.map(( item ) => {
                            return <TabPane tab={item.TenHangSanXuat} key={item._id}>
                                <ProductTable
                                    data={products?.data?.filter(e => e.HangSanXuat=== item._id)}
                                    catalogs={catalogs}
                                    loading={products.load}
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