import React, { useEffect, useState } from 'react';
import CartTable from './cartTable';
import { Form, Alert, Button, Modal, Input } from 'antd';
import './style.css'
import { CarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../redux/actions/product";
import { Link } from 'react-router-dom';
import { postOrder } from '../../redux/actions/order';
import { useHistory } from "react-router-dom";

function Cart() {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    // let data = [];
    const [data, setData]= useState([]);
    const products = useSelector((state) => state.products.data);
    const loading = useSelector(state=> state.products.load);
    const token = JSON.parse(localStorage.getItem("thelaptopworld_token"));
    const order = useSelector((state) => state.order);
    const history = useHistory();


    const renderProduct = (products) => {
        let array=[];
        let cart = localStorage.cart;
        if (cart) {
            let cartStorage = JSON.parse(cart);
            if(products){
                cartStorage.forEach(item => {
                    let product = products.filter(e => e.Key === item.productKey)[0];
                    let cauhinh = {}
                    if(product){
                        cauhinh = product.CauHinhSanPham.filter(e => e._id === item.CauHinh )[0];
                    }
                    array.push({
                        Key: item.productKey,
                        name: product?product.TenSanPham:null,
                        img: product?product.HinhAnh[0].Url:null,
                        cauhinh: cauhinh?cauhinh._id:null,
                        price: cauhinh?cauhinh.GiaSanPham:null,
                        soluong: item.SoLuong,
                        total: cauhinh?cauhinh.GiaSanPham * item.SoLuong:0,
                    })
                });
            }
        }
        setData(array)
    }

    const changeQuantity = (changedValues, allValues) => {
        let cartStorage = JSON.parse(localStorage.cart);
        let field = JSON.parse(changedValues[0].name[0]);
        let Key = field.Key;
        let CauHinh= field.CauHinh; 
        let valueChanged= changedValues[0].value;

        if(valueChanged===0){
            localStorage.cart =JSON.stringify(cartStorage.filter(item=> item.productKey!== Key && item.CauHinh !== CauHinh));
        }
        else{
            cartStorage.forEach(item => {
                if(item.productKey=== Key && item.CauHinh === CauHinh){
                    item.SoLuong =valueChanged
                }
            });
            localStorage.cart =JSON.stringify(cartStorage);
        }
        renderProduct(products);
    }

    const totalRecord = () => {
        let total = 0;
        data.forEach(element => {
            total += element.total;
        });
        return total;
    }

    
    useEffect(() => {
        dispatch(getListProduct());
    }, [dispatch]);

    useEffect(()=>{
        renderProduct(products);
    },[dispatch, products])
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} kh??ng ???????c tr???ng!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    const onFinish = async(values) => {
        const SanPham= data.map(item=> {
            return {
                MaSanPham: item.Key,
                CauHinh: item.cauhinh,
                SoLuong: item.soluong,
                GiaTien: item.price
            }
        })
        const body= {
            SanPham: SanPham,
            MaKhachHang: token.userId,
            ...values,
            TrangThai: 0,
        }
        await dispatch(postOrder(body));
        if(order.status){
            Modal.success({
                content: '?????t h??ng th??nh c??ng !',
                onOk(){
                    history.push('/');
                }
              });
        }
        else{
            Modal.error({
                title: '?????t h??ng kh??ng th??nh c??ng',
                content: 'C?? v??? ???? x???y ra v???n ????? g?? ????, vui l??ng th??? l???i sau !',
              });
        }
    };

    return ( 
        <>
            <div className='cart-page container my-5 text-center'>
                <h2>Gi??? h??ng</h2>
                <div className='page-center'>
                    <CartTable
                        data={data}
                        loading={loading}
                        changeQuantity={changeQuantity}
                    />
                    {
                        !loading && data[0] ?
                        <div className='row justify-content-between'>
                            <div className='col-5 mt-3'>
                                <Alert
                                    message="H??nh th???c thanh to??n"
                                    description="Hi???n t???i shop ch??? h??? tr??? h??nh th???c thanh to??n COD (thanh to??n khi nh???n h??ng)"
                                    type="error"
                                    icon={<CarOutlined />}
                                    showIcon
                                />
                            </div>
                                <div className='col-6 mt-3'>
                                    <h5>Thanh To??n: 
                                    <span className='text-danger'>  {totalRecord().toLocaleString("vi-vn")} VN??</span></h5> <br />
                                    {
                                        token?
                                        <Button onClick={() => setVisible(true)} type='primary' style={{backgroundColor: 'rgb(255, 93, 0)', borderColor: 'rgb(255, 93, 0)'}} shape="round" size='large'>
                                            Ti???n h??nh ?????t h??ng
                                        </Button>
                                        :
                                        <Alert message="B???n ph???i ????ng nh???p ????? ?????t h??ng" type="warning" showIcon closable />
                                    }
                                </div>
                        </div>
                        :
                        null
                    }

                </div>
            </div>
            <Modal
                title="Th??ng tin nh???n h??ng"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <Form labelCol={{span: 7}} labelAlign='left' onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name='TenNguoiNhan' initialValue={token?.userName} label="T??n ng?????i nh???n" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='SoDienThoaiNhanHang' label="S??? ??i???n tho???i" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='DiaChiGiaoHang' label="?????a ch??? nh???n h??ng" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='GhiChu' label="Ghi ch??" rules={[{ required: true }]}>
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ margin: '0 auto', display: 'block'}}>
                        X??c nh???n
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
     );
}

export default Cart;