import React from "react";
import { Layout, Menu, Row, Typography } from 'antd';
import { Link } from "react-router-dom";
import menuItemConfig from "./sliderConfig";
import { staffRole } from '../../constants/staffRoleConfig';

const Nav = (props) => {
    const {collapsed}= props
    const menu = [];
    const Token = JSON.parse(localStorage.thelaptopworld_token);

    menuItemConfig.forEach(item => {
      if (item.role.filter(e => e === Token.role).length > 0){
        if(item.submenu===null){
          menu.push(<Menu.Item icon={item.icon} key={item.key}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>);
        }
        else{
          menu.push(
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.name}>
              {item.submenu?.map((e) => (
                <Menu.Item style={{backgroundColor: '#363740', margin:'0', paddingLeft: '25%'}} key={e.path}>
                  <Link to={e.path}>{e.name}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          );
        }
      }
    })

    return (
        <Layout.Sider style={{background: '#363740', paddingTop: '5px'}} trigger={null} collapsible collapsed={collapsed}>
          <Row justify='center' align='middle'>
            {
                collapsed? <Typography.Title style={{color: 'white'}} level={2}></Typography.Title>: <Typography.Title style={{color: 'white'}} level={2}>{staffRole.filter(e => e.PhanQuyen === Token.role)[0].roleName}</Typography.Title>
            }
          </Row>
          <Menu theme='dark' style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} mode="inline" defaultSelectedKeys={['1']}>
            { menu }
          </Menu>
        </Layout.Sider>
    );
}

export default Nav;
