import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row, Col, Space } from "antd";
import { loginCustomer } from "../../../redux/actions/customer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Logo from "../../site/Logo.png";
import "./index.css";
const LoginSite = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.loginCustomer.data);
  const load = useSelector((state) => state.loginCustomer.load);
  useEffect(() => {
    if (res) {
      const token = res.response;
      console.log(res);
      if (res.status === "success") {
        const setToken = {
          userId: token.userId,
          userName: token.userName,
        };
        localStorage.setItem("thelaptopworld_token", JSON.stringify(setToken));
        window.location.replace("/");
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
      loginCustomer({
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
    <main className="container py-5 mb-3 mt-3">
      <Row justify="center" className="">
        <Col
          xl={12}
          lg={15}
          md={20}
          sm={20}
          xs={24}
          style={{ backgroundColor: "rgba(47, 212, 234, 0.747)" }}
          className="p-4 rounded-3"
        >
          <img src={Logo} alt="" className="d-block m-auto" />
          <h4 className="mt-5 text-center text-light">Đăng nhập vào TGLT</h4>
          <h6 className="text-light text-center">
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
            <div className="text-uppercase text-light">Tài khoản</div>
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
            <div className="d-flex align-items-center justify-content-between text-light">
              <div className="text-uppercase">Mật khẩu</div>
              <Link to="/" className="text-light">
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
          <h6 className="text-light text-center">
            Không có tài khoản ? <Link to="/dang-ky-site">Đăng ký</Link>
          </h6>
        </Col>
      </Row>
    </main>
  );
};

export default LoginSite;
