import React from 'react';
import { Col, Layout, Row, Dropdown, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    InfoCircleOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const MenuDropdown = () =>{
    return(
        <Menu>
            <Menu.Item key="1" icon={<InfoCircleOutlined />}>
                Thông tin tài khoản
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    )
}

function Header(props) {
    const { Header } = Layout;
    const {collapsed, toggle} = props;

    return ( 
        <Header className="site-layout-background" style={{background: 'white', paddingLeft: '20px' }}>
            <Row align='middle' justify='space-between' >
                <Col span={4}>
                    {
                    collapsed ? <MenuUnfoldOutlined className='trigger' style={{fontSize: '20px'}} onClick={toggle} /> 
                    : <MenuFoldOutlined className='trigger' style={{fontSize: '20px'}} onClick={toggle} />
                    }
                </Col>
                <Col>
                    <Dropdown.Button overlay={MenuDropdown} placement="bottomRight" arrow icon={<UserOutlined />}>
                        Nguyễn Trần Trung Khải
                    </Dropdown.Button>
                </Col>
            </Row>
        </Header>
     );
}

export default Header;