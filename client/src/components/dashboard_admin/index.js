import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import './dashboard.css';


function Dashboard_admin() {
    return ( 
        <Layout>
            <Row justify='space-between'>
                <Col xs={11} sm={11} md={5} lg={5} xl={5} className="gutter-row count-box" span={5}>
                    <p>
                        <Typography.Title level={5} type="secondary">
                            Đơn hàng
                        </Typography.Title>
                    </p>
                    <p>
                        <Typography.Title level={2}>
                            30
                        </Typography.Title>
                    </p>
                </Col>
                <Col xs={11} sm={11} md={5} lg={5} xl={5} className="gutter-row count-box" span={5}>
                    <p>
                        <Typography.Title level={5} type="secondary">
                            Doanh thu
                        </Typography.Title>
                    </p>
                    <p>
                        <Typography.Title level={2}>
                            15M
                        </Typography.Title>
                    </p>
                </Col>
                <Col xs={11} sm={11} md={5} lg={5} xl={5} className="gutter-row count-box" span={5}>
                    <p>
                        <Typography.Title level={5} type="secondary">
                            Lượt truy cập
                        </Typography.Title>
                    </p>
                    <p>
                        <Typography.Title level={2}>
                            9K
                        </Typography.Title>
                    </p>
                </Col>
                <Col xs={11} sm={11} md={5} lg={5} xl={5} className="gutter-row count-box" span={5}>
                    <p>
                        <Typography.Title level={5} type="secondary">
                            Đơn hàng
                        </Typography.Title>
                    </p>
                    <p>
                        <Typography.Title level={2}>
                            30
                        </Typography.Title>
                    </p>
                </Col>
            </Row>
        </Layout>
     );
}

export default Dashboard_admin;