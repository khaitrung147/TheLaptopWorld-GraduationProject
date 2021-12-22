import React, { useState } from 'react';
import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { staffRole } from '../../constants/staffRoleConfig'

function CatalogTable(props) {
    const { data, loading } = props;
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);

    const mapStaffRole = () => {

    }

    const columns = [
        {
            title: 'Tên nhân viên',
            dataIndex: 'TenNhanVien',
            key: 'TenNhanVien',
        },
        {
            title: 'Hình đại diện',
            dataIndex: 'Avatar',
            key: 'Avatar',
            render: Avatar => <div className='avatar'><img alt='avatar' src={Avatar} /></div>
        },
        {
            title: 'Tên đăng nhập',
            dataIndex: 'Username',
            key: 'Username',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'Phone',
            key: 'Phone',
        },
        {
            title: 'Phân Quyền',
            dataIndex: 'PhanQuyen',
            key: 'PhanQuyen',
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (text, record) => (
        //         <Space size="middle">
        //             <Button>Xem thêm</Button>
        //         </Space>
        //     ),
        // },
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
            // rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{ pageSize:5}}
            // scroll={{ x: 1300 }}
        />
    );
}

export default CatalogTable;