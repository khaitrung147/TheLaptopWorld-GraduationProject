import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import Page from "../../Page";
import Sider from "./Sider"
import Header from "./Header";

const Index = ({children}) => {
    const { Content } = Layout;
    const [collapsed, setCollapsed] = useState(false)
  
    const toggle = () => {
      setCollapsed(!collapsed);
    };
    return (
      <Layout >
        <Sider collapsed={collapsed} />
        <Layout className="site-layout" style={{minHeight: '100vh'}}>
          <Header toggle={toggle} collapsed={collapsed}/>
          <Content
            className="site-layout-background"
            style={{
              background: 'white',
              margin: '24px 16px',
              padding: 24,
            }}
          >
          </Content>
        </Layout>
      </Layout>
    );
}

export default Index;
