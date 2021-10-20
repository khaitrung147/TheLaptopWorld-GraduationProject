import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Layout} from 'antd';
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
              margin: '0px 16px',
              paddingTop: '0',
              paddingBottom: '24px',
              paddingLeft: '24px',
              paddingRight: '24px'
            }}
          >
            {children}
          </Content>
          <Layout.Footer style={{ textAlign: 'center' }}>Dashboard Site ©2021 Created by TheLaptopWorld</Layout.Footer>
        </Layout>
      </Layout>
    );
}

export default Index;
