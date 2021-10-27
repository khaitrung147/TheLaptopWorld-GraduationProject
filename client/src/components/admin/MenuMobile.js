import React from "react";
import { Menu, Row, Typography, Drawer } from 'antd';
import { Link } from "react-router-dom";
import menuItemConfig from "./sliderConfig";

const Nav = (props) => {
    const {visible, onCloseMoblieMenu}= props
    const menu = [];

    menuItemConfig.forEach(item => {
      if(item.submenu===null){
        menu.push(<Menu.Item icon={item.icon} key={item.key}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>);
      }
      else{
        menu.push(
          <Menu.SubMenu key={item.key}icon={item.icon} title={item.name}>
            {item.submenu?.map((e) => (
              <Menu.Item style={{backgroundColor: '#363740', margin:'0', paddingLeft: '25%'}} key={e.path}>
                <Link to={e.path}>{e.name}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        );
      }
    })

    return (
        <Drawer
            className='menu-moblie'
        //   title="Basic Drawer"
          placement='left'
          onClose={onCloseMoblieMenu}
          closable={false}
          visible={visible}
          key='left'
          drawerStyle={{background: '#363740'}}
        >
            <Row justify='center' align='middle'>
            {
                <Typography.Title style={{color: 'white'}} level={2}>ADMIN</Typography.Title>
            }
            </Row>
            <Menu theme='dark' style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} mode="inline" defaultSelectedKeys={['1']}>
            { menu }
            </Menu>
        </Drawer>
    );
}

export default Nav;
