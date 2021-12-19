import React from "react";
import { Form, Input, Button, message  } from "antd";
import ContactImg from "./contact.jpg";
import './style.css'
import { postContact } from '../../api/contact';

function Contact() {
  const onFinish = async (values) => {
    const body= {
        Email: values.Email,
        CustomerName: values.CustomerName,
        Description: values.PhanHoi,
        Status: false,
    }
    try {
        const respone =  await postContact(body);
        console.log('respone :>> ', respone);
        if(respone.status===200){
            message.success('Gửi phản hồi thành công !');
        }
    } catch (error) {
        message.error('Đã xảy ra lỗi, vui lòng thử lại sau');
        console.log('error :>> ', error);        
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h3 className="text-info text-center pt-5">LIÊN HỆ VỚI CHÚNG TÔI</h3>
          <div className="col-5">
            <img src={ContactImg} alt="Liên hệ" className="img-fluid" />
          </div>
          <div className="col-7 pt-5">
            <div className="form-contact px-5">
              <Form
                layout='vertical'
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                    label='Email của bạn:'
                
                  name="Email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Vui lòng nhập đúng định dạng E-mail!',
                    },
                    {
                      required: true,
                      message: 'Vui lòng không bỏ trống E-mail!',
                    },
                  ]}
                >
                  <Input placeholder="example@gmail.com"/>
                </Form.Item>
                <Form.Item
                    label='Họ và tên:'
                
                  name="CustomerName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng không bỏ trống!',
                    },
                  ]}
                >
                  <Input placeholder="Họ và tên"/>
                </Form.Item>
                <Form.Item
                    label='Phản hồi / ý kiến:'
                  name="PhanHoi"
                  rules={[
                    {
                      required: true,
                      message: "Vui Lòng nhập phản hồi vào",
                    },
                  ]}
                >
                  <Input.TextArea placeholder="Phản hồi được viết tại đây..." rows={4}/>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                  >
                    Gửi
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center" id="tuyen-dung">
            <div className="col-6 text-center">
                <h3 className="text-info text-center pt-5">Tuyển dụng</h3>
                <p>
                    Nhà tuyển dụng: The Laptop World Team
                </p>
                <p>
                    Email liên hệ: <span className="text-secondary">khainttps12314@fpt.edu.vn</span>
                </p>
                <p>
                    Số điện thoại liên hệ: <span className="text-secondary">0909.888.999</span>
                </p>
                <p>
                    Địa chỉ: <span className="text-secondary">999, Trường Chinh, Gò Vấp, Thành phố Hồ Chí Minh</span>
                </p>
            </div>
        </div>

      </div>
    </>
  );
}

export default Contact;
