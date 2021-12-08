import React, { useState } from 'react';
import { Table, Space, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

function CatalogTable(props) {
    const { data, loading } = props;
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);

    const columns = [
        {
            title: 'Tên khách hàng',
            dataIndex: 'TenKhachHang',
            key: 'TenKhachHang',
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
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button>Xem thêm</Button>
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
            pagination={{ pageSize:5}}
            scroll={{ x: 1300 }}
        />
    );
}

export default CatalogTable;