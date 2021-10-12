import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import Page from "../../Page";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from './MenuMobile'
import Header from "./Header";
import { useViewport } from "../../constants/viewPort";

const Index = ({children}) => {
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 1024;
    const { Content } = Layout;
    const [collapsed, setCollapsed] = useState(false)
  
    const toggle = () => {
      setCollapsed(!collapsed);
    };


    return (
      <Layout >
        {
          isMobile?
          <MenuMobile visible={collapsed} onCloseMoblieMenu={toggle} />: <MenuDesktop collapsed={collapsed} />
        }
        <Layout className="site-layout" style={{minHeight: '100vh'}}>
          <Header toggle={toggle} collapsed={collapsed}/>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
}

export default Index;
