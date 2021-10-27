import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { Link } from 'react-router-dom';

function CatalogTable(props) {
    const { data } = props;
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);
    const columns = [
        {
            title: 'Tên loại sản phẩm',
            dataIndex: 'TenLoaiSanPham',
            key: 'TenLoaiSanPham',
            render: (text,data) => <Link to={`/admin/loai-san-pham/${data._id}`}>{text}</Link>,
        },
        {
            title: 'Hãng sản xuất',
            dataIndex: 'HangSanXuat',
            key: 'HangSanXuat',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'AnHien',
            render: AnHien => (
                <>
                    {
                        !AnHien?
                        <Tag color='volcano'>
                            ẨN
                        </Tag>
                        :
                        <Tag color='green'>
                            HIỆN
                        </Tag>
                    }
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button>Delete</Button>
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
            rowKey='_id'
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
        />
    );
}

export default CatalogTable;