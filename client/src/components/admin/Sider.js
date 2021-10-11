import React from "react";
import { Layout, Menu, Row, Typography } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const Nav = (props) => {
    const {collapsed}= props
    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
          <Row justify='center' align='middle'>
            {
                collapsed? <Typography.Title style={{color: 'white', marginTop: '2%'}} level={2}>AD</Typography.Title>: <Typography.Title style={{color: 'white', marginTop: '2%'}} level={2}>ADMIN</Typography.Title>
            }
          </Row>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Layout.Sider>
    );
}

export default Nav;
