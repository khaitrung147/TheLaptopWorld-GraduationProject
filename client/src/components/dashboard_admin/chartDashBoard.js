import React from 'react';
import { Row, Col, Typography } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './dashboard.css';

function Chart() {
    const data = [
      { name: "Page A", uv: 0, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 300, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 100, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 250, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 450, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 100, pv: 2400, amt: 2400 },
    ];

    return (
        <Col xs={24} sm={24} md={24} lg={18} xl={18} className="gutter-row chart-box" span={16}>
            <Row className='header-chart'>
                <Col span={24}>
                    <Typography.Title level={4}>Lượt truy cập trang web</Typography.Title>
                </Col>
                <Col span={24}>
                    <Typography.Text type='secondary'>Từ ngày 1/6/2021 - 30/6/2021</Typography.Text>
                </Col>
            </Row>
            <Row>
                <div style={{ width: '90%', height:300}} >
                    <ResponsiveContainer>
                        <LineChart width={600} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Row>
        </Col>
    );
}

export default Chart;