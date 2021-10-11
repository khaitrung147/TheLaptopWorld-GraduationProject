import React from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Row, Col, Space } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();

  return (
    <main className="container py-5">
      <Row justify='center' className='py-5'>
        <Col span={8}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Xin hãy nhập tài khoản!",
                },
              ]}
            >
                <Input size="large" placeholder="Tài khoản" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Xin Hãy nhập mậT khẩu!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Mật khẩu" prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item>
                <Space >
                <Button size='large' type="primary" htmlType="submit">
                    Đăng nhập
                </Button>
                <Checkbox>Remember me</Checkbox>
                </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </main>
  );
};

export default Login;
