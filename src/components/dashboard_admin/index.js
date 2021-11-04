import React from 'react';
import { Layout, Row, Col, Typography, Breadcrumb } from 'antd';
import './dashboard.css';
import Chart from './chartDashBoard'

function Dashboard_admin() {
    return ( 
        <Layout>
            <Breadcrumb style={{ margin: '24px 0' }} separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Row justify='space-between dash-head'>
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
            <Row>
                <Chart />
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="gutter-row chart-count" span={8}>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={24} xl={24} className="gutter-row count-box" span={5}>
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
                        <Col xs={12} sm={12} md={6} lg={24} xl={24} className="gutter-row count-box" span={5}>
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
                        <Col xs={12} sm={12} md={6} lg={24} xl={24} className="gutter-row count-box" span={5}>
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
                        <Col xs={12} sm={12} md={6} lg={24} xl={24} className="gutter-row count-box" span={5}>
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
                    </Row>
                </Col>
            </Row>
        </Layout>
     );
}

export default Dashboard_admin;