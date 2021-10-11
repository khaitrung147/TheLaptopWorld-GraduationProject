import React from "react";
import { Layout, Menu, Row, Typography } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import { Link, Redirect } from "react-router-dom";
import menuItemConfig from "./sliderConfig";

const Nav = (props) => {
    const {collapsed}= props
    const menu = [];

    menuItemConfig.forEach(item => {
      if(item.submenu===null){
        menu.push(<Menu.Item icon={item.icon} key={item.key}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>);
      }
      else{
        menu.push(
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.name}>
            {item.submenu?.map((e) => (
              <Menu.Item key={e.path}>
                <Link to={e.path}>{e.name}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        );
      }
    })

    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
          <Row justify='center' align='middle'>
            {
                collapsed? <Typography.Title style={{color: 'white', marginTop: '2%'}} level={2}>AD</Typography.Title>: <Typography.Title style={{color: 'white', marginTop: '2%'}} level={2}>ADMIN</Typography.Title>
            }
          </Row>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { menu }
          </Menu>
        </Layout.Sider>
    );
}

export default Nav;
