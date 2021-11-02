import React, { useState } from 'react';
import { Table, Row, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { DoubleRightOutlined } from '@ant-design/icons';

const actionRender = (status) =>{
    if(status===0){
        return <Button type='primary'><i>Xác nhận</i></Button>
    }
    else if(status===1){
        return <Button type='primary'><i>Bắt đầu vận chuyển</i></Button>
    }
    else if(status===2){
        return <Button type='primary'><Row align='middle' justify='space-between'>Giao thành công<DoubleRightOutlined /></Row></Button>
    }
    else{
        return null
    }
}


function CatalogTable(props) {
    const { data, status, loading } = props;
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);

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
            render: () => <>{status}</>
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
            title: 'Action',
            key: 'action',
            dataIndex: 'TrangThai',
            render: TrangThai => (
                <Space size="middle">
                    {
                        actionRender(TrangThai)
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