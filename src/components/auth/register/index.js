import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Logo from "../../site/Logo.png";
import { registerCustomer } from "../../../redux/actions/customer";
const RegisterSite = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.registerCustomer.data);
  const load = useSelector((state) => state.registerCustomer.load);

  useEffect(() => {
    if (res) {
      console.log(typeof res);

      if (typeof res == "string") {
        toast.error("Username existed !", {
          position: "top-center",
        });
      } else {
        toast.success("Register success !", {
          position: "top-center",
        });
      }
    }
  }, [res]);

  const re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  const onFinish = (values) => {
    if (re.test(values.phone) == false) {
      toast.error("Phone number incorrect !", {
        position: "top-center",
      });
    } else {
      dispatch(
        registerCustomer({
          TenKhachHang: values.fullname,
          Username: values.username,
          Password: values.password,
          Email: values.email,
          Phone: values.phone,
          Avatar: "NULL",
        })
      );
    }
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
          style={{ backgroundColor: "rgb(47, 212, 234)" }}
          className="p-4 rounded-3"
        >
          <img src={Logo} alt="" className="d-block m-auto" />
          <h2 className="mt-5 text-center text-light">Đăng ký thành viên</h2>
          <h6 className="text-light text-center">Điền thông tin phía dưới</h6>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="mt-5"
          >
            <div className="text-uppercase text-light">Họ & tên</div>
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Xin hãy nhập họ và tên",
                },
              ]}
            >
              <Input size="large" placeholder="Họ & tên" />
            </Form.Item>

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
            <div className="text-uppercase text-light">Mật khẩu</div>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Xin Hãy nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Mật khẩu" />
            </Form.Item>

            <div className="text-uppercase text-light">Email</div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Xin hãy nhập email",
                  type: "email",
                },
              ]}
            >
              <Input size="large" placeholder="Email" />
            </Form.Item>

            <div className="text-uppercase text-light">Số điện thoại</div>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Xin hãy nhập số điện thoại",
                },
              ]}
            >
              <Input size="large" placeholder="Số điện thoại" />
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
                  Đăng ký
                </Button>
              ) : (
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Đăng ký
                </Button>
              )}
            </Form.Item>
          </Form>
          <h6 className="text-light text-center">
            <Link to="/dang-nhap-site">Trở về</Link>
          </h6>
        </Col>
      </Row>
    </main>
  );
};

export default RegisterSite;
