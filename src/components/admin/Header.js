import React from 'react';
import { Col, Layout, Row, Dropdown, Menu, Space, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    InfoCircleOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Header(props) {
    const { Header } = Layout;
    const {collapsed, toggle} = props;
    const history = useHistory();
    
    const logOut = () => {
        localStorage.removeItem('thelaptopworld_token');
        window.location.replace("/dang-nhap");
    }   

    const MenuDropdown = () =>{
        return(
            <Menu>
                <Menu.Item onClick={logOut} key="log-out" icon={<LogoutOutlined />}>
                    Đăng xuất
                </Menu.Item>
            </Menu>
        )
    }

    return ( 
        <Header className="site-layout-background" style={{background: 'white', paddingLeft: '20px' }}>
            <Row align='middle' justify='space-between' >
                <Col>
                    {
                    collapsed ? <MenuUnfoldOutlined className='trigger' style={{fontSize: '20px'}} onClick={toggle} /> 
                    : <MenuFoldOutlined className='trigger' style={{fontSize: '20px'}} onClick={toggle} />
                    }
                </Col>
                <Col>
                    <Dropdown  overlay={MenuDropdown} placement="bottomRight" arrow>
                        <Space align='center'>
                            {JSON.parse(localStorage.thelaptopworld_token).userName}
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Space>
                    </Dropdown>
                </Col>
            </Row>
        </Header>
     );
}

export default Header;