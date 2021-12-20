import React, { useEffect } from 'react';
import { Layout, Row, Breadcrumb, Typography, Input, Form, Col, Select, Button } from 'antd';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';

const { Title } = Typography;
const { Option } = Select;

function Catalog() {
    const [form] = Form.useForm();
    const dispatch= useDispatch();

    const onFinish = (values) => {
        console.log(values);
    };

    useEffect(()=>{
    },[dispatch]);
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} không được trống!',
        types: {
        email: '${label} không đúng định dạng email',
        number: '${label} phải là số!',
        },
        number: {
        range: '${label} phải nằm trong khoảng từ ${min} đến ${max}',
        },
    };

    return (
      <div>
        <Breadcrumb style={{ margin: "24px 0" }} separator=">">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Thêm hãng sản xuất</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background catalog">
          <Title level={4}>Thêm hãng sản xuất</Title>
          <Form
            layout="vertical"
            validateMessages={validateMessages}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Row gutter={[50, 0]}>
              <Col span={12}>
                <Form.Item
                  name="TenHangSanXuat"
                  label="Tên hãng sản xuất"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="HinhDaiDien"
                  label="Hình ảnh thương hiệu"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Layout>
      </div>
    );
}

export default Catalog;