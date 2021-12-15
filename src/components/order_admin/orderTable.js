import React, { useState } from 'react';
import { Table, Row, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { DoubleRightOutlined } from '@ant-design/icons';
import { updateOrder, getListOrder } from '../../redux/actions/order';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const handleTitleTime = (status) => {
    if(status === 0){
        return 'Thời gian đặt hàng';
    }
    else if( status === 1){
        return 'Thời gian xác nhận';
    } 
    else if( status === 2){
        return 'Bắt đầu vận chuyển ';
    } 
    else{
        return 'Thời gian hoàn thành';
    }
}


function CatalogTable(props) {
    const { data, statusTitle, loading, status, updateStatus } = props;
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);
    const format= 'HH:mm - DD/MM/YYY';
    const Token = JSON.parse(localStorage.thelaptopworld_token);

    const actionRender = (id, status) =>{
        if(status===0){
            return <Button disabled={Token.role !== 2} onClick={() => updateStatus(id, status)} type='primary'><i>Xác nhận</i></Button>
        }
        else if(status===1){
            return <Button disabled={Token.role !== 3} onClick={() => updateStatus(id, status)} type='primary'><i>Bắt đầu vận chuyển</i></Button>
        }
        else if(status===2){
            return <Button disabled={Token.role !== 3} onClick={() => updateStatus(id, status)} type='primary'><Row align='middle' justify='space-between'>Giao thành công<DoubleRightOutlined /></Row></Button>
        }
        else{
            return null
        }
    }

    const columns = [
        {
            title: 'Mã đơn hàng',
            dataIndex: '_id',
            key: 'MaDonHang',
            render: _id => <Link to={`/admin/don-hang/${_id}`}>{_id}</Link>,
        },
        {
            title: 'Khách hàng',
            dataIndex: 'MaKhachHang',
            key: 'MaKhachHang',
            render: MaKhachHang => <Link to={`/admin/tai-khoan-khach-hang/${MaKhachHang}`}>{MaKhachHang}</Link>,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'TrangThai',
            render: () => <>{statusTitle}</>
        },
        {
            title: 'Thông tin giao hàng',
            dataIndex: 'ThongTinGiaoHang',
            align: 'center',
            render: () => <Space size="middle">
                <Button type='dashed'>Xem</Button>
            </Space>
        },
        {
            title: handleTitleTime(status),
            align:'left',
            render: data => {
                if(status===0){
                    return moment(data.createdAt).format(format);
                }
                else{
                    return moment(data.updatedAt).format(format) ;
                }
            }
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'TrangThai',
            render: (TrangThai, data) => (
                <Space size="middle">
                    {
                        actionRender(data._id, TrangThai)
                    }
                </Space>
            ),
        },
    ];

    const onSelectChange = selectedRowKeys => {
        setSelectedRowKeys(selectedRowKeys)
      };
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    return (
        <Table
            loading={loading}
            rowKey='_id'
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10}}
        />
    );
}

export default CatalogTable;