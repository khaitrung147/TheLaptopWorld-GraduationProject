import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row, Col, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginStaff } from "../../redux/actions/staff";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Logo from "../site/Logo.png";
import "./index.css";
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
      <Row justify="center" className="">
        <Col xl={12} lg={15} md={20} sm={20} xs={24} className="p-4 rounded-3">
          <img src={Logo} alt="" className="d-block m-auto" />
          <h4 className="mt-5 text-center text-gray">
            Đăng nhập trang quản trị TGLT
          </h4>
          <h6 className="text-gray text-center">
            Nhập tài khoản và mật khẩu phía dưới
          </h6>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="mt-5"
          >
            <div className="text-uppercase text-gray">Tài khoản</div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Xin hãy nhập tài khoản!",
                },
              ]}
            >
              <Input size="large" placeholder="Tài khoản" />
            </Form.Item>
            <div className="d-flex align-items-center justify-content-between text-gray">
              <div className="text-uppercase">Mật khẩu</div>
              <Link to="/" className="text-gray">
                Quên mật khẩu ?
              </Link>
            </div>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Xin Hãy nhập mậT khẩu!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item>
              {load ? (
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  disabled
                  style={{ width: "100%" }}
                >
                  Đăng nhập
                </Button>
              ) : (
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Đăng nhập
                </Button>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </main>
  );
};

export default Login;
