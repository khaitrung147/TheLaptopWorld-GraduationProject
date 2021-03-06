import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Logo from "../../site/Logo.png";
import { registerCustomer } from "../../../redux/actions/customer";
import { useHistory } from "react-router";
const RegisterSite = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.registerCustomer.data);
  const load = useSelector((state) => state.registerCustomer.load);
  const history = useHistory()
  useEffect(() => {
    if (res) {
      if (res === "existed") {
        toast.error("Username existed !", {
          position: "top-center",
        });
      } else if( res === 'success') {
        toast.success("Register success !", {
          position: "top-center",
        });
        setTimeout(()=>{
          history.push('/dang-nhap-site')
        }, 2000)
        
      }
    }
  }, [res , history]);

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
          <h2 className="mt-5 text-center text-light">????ng k?? th??nh vi??n</h2>
          <h6 className="text-light text-center">??i???n th??ng tin ph??a d?????i</h6>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="mt-5"
          >
            <div className="text-uppercase text-light">H??? & t??n</div>
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Xin h??y nh???p h??? v?? t??n",
                },
              ]}
            >
              <Input size="large" placeholder="H??? & t??n" />
            </Form.Item>

            <div className="text-uppercase text-light">T??i kho???n</div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Xin h??y nh???p t??i kho???n!",
                },
              ]}
            >
              <Input size="large" placeholder="T??i kho???n" />
            </Form.Item>
            <div className="text-uppercase text-light">M???t kh???u</div>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Xin H??y nh???p m???t kh???u!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="M???t kh???u" />
            </Form.Item>

            <div className="text-uppercase text-light">Email</div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Xin h??y nh???p email",
                  type: "email",
                },
              ]}
            >
              <Input size="large" placeholder="Email" />
            </Form.Item>

            <div className="text-uppercase text-light">S??? ??i???n tho???i</div>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Xin h??y nh???p s??? ??i???n tho???i",
                },
              ]}
            >
              <Input size="large" placeholder="S??? ??i???n tho???i" />
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
                  ????ng k??
                </Button>
              ) : (
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  ????ng k??
                </Button>
              )}
            </Form.Item>
          </Form>
          <h6 className="text-light text-center">
            <Link to="/dang-nhap-site">Tr??? v???</Link>
          </h6>
        </Col>
      </Row>
    </main>
  );
};

export default RegisterSite;
