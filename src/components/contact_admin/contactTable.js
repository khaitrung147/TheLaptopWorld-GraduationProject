import React, { useState } from 'react';
import { Table, Tag, Space, Button, Popconfirm, notification } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

function CatalogTable(props) {
    const { data, Status, loading, changeStatusContact } = props;
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);


    function deleteConfirm(e) {
        notification.open({
            message: 'Xoá thành công',
            description:
              'Đã xoá thành công loại sản phẩm ...',
            icon: <DeleteOutlined style={{ color: '#52c41a' }} />,
        });
    }

    function deleteCancel(e) {
        
    }

    const columns = [
        {
            title: 'Tên khách hàng',
            dataIndex: 'CustomerName',
            key: 'CustomerName',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: 'Nội dung',
            dataIndex: 'Description',
            key: 'Description',
        },
        {
            title: '',
            key: 'action',
            render: data => (
                !Status?
                <Space size="middle">
                    <Button onClick={()=>changeStatusContact(data._id)}>Đánh dấu đã phản hồi</Button>
                </Space>:null
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
        />
    );
}

export default CatalogTable;