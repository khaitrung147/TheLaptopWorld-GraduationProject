import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Form, Input, Button, Select, Row, Col, notification } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { staffRole } from '../../constants/staffRoleConfig';
import './index.css';
import { registerStaff, getListStaff } from '../../redux/actions/staff';

const { Title } = Typography;
const { Option } = Select;

function RegisterCustomerForm() {
    const [form] = Form.useForm();
    const dispatch= useDispatch();
    const staffs = useSelector(state => state.staff);
    console.log('staffs :>> ', staffs);

    const handleRegisterStaff = async (value) => {
        dispatch(registerStaff(value));
        dispatch(getListStaff());
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} không được trống !',
        types: {
          email: '${label} không đúng định dạng !',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    return ( 
        <>
            <Row align='middle' justify='start'>
                <UsergroupAddOutlined/><Title level={4}> Đăng kí tài khoản nhân viên</Title>
            </Row>
            <Form
                labelCol={{ span: 7}}
                labelAlign='left'
                name='register-customer-form'
                className='register-customer-form'
                form={form} onFinish={handleRegisterStaff}
                validateMessages={validateMessages}
            >
                <Row gutter={[60, 6]}>
                    <Col span={12}>
                        <Form.Item rules={[{ required: true }]} label='Tên nhân viên' name='TenNhanVien' >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item rules={[{ type: 'email', required: true }]} label='Email' name='Email' >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item rules={[{ required: true }]} label='Số điện thoại' name='Phone' >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item rules={[{ required: true }]} label='Phân quyền' name='PhanQuyen' >
                            <Select>
                                {
                                    staffRole.map(item => <Option value={item.PhanQuyen}>{item.roleName}</Option>)
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item rules={[{ required: true }]} label='Tài khoản đăng nhập' name='Username' >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item rules={[{ required: true }]} label='Mật khẩu' name='Password' >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item rules={[{ required: true }]} label='Hình đại diện' name='Avatar' >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Button loading={staffs?.registerLoad} type="primary" className='btn-register' htmlType="submit">
                                Đăng kí
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
     );
}

export default RegisterCustomerForm;