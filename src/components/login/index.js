import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row, Col, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginStaff } from "../../redux/actions/staff";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.loginStaff.data);
  const load = useSelector((state) => state.loginStaff.load);
  useEffect(() => {
    if (res) {
      if (res.status === "success") {
        const token = res.response;
        const setToken = {
          userId: token.userId,
          userName: token.useName,
          role: token.role,
        };
        localStorage.setItem("thelaptopworld_token", JSON.stringify(setToken));
        toast.success("Login success", { position: "top-center" });
        window.location.replace("/admin");
      } else if (res.status === "not-found") {
        toast.error("Can not found your Username !", {
          position: "top-center",
        });
      } else if (res.status === "wrong-pass") {
        toast.error("Maybe your Password is wrong !", {
          position: "top-center",
        });
      }
    }
  }, [res]);
  const onFinish = (values) => {
    dispatch(
      loginStaff({
        Username: values.username,
        Password: values.password,
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();

  return (
    <main className="container py-5">
      <Row justify="center" className="py-5">
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
              <Input
                size="large"
                placeholder="Tài khoản"
                prefix={<UserOutlined />}
              />
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
              <Input.Password
                size="large"
                placeholder="Mật khẩu"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <Space>
                {load ? (
                  <Button
                    size="large"
                    type="primary"
                    htmlType="submit"
                    disabled
                  >
                    Đăng nhập
                  </Button>
                ) : (
                  <Button size="large" type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                )}

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
