import React, { useState } from 'react';
import { Table, Tag, Space } from 'antd';

function CatalogTable() {
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);
    const data = [
        {
            _id: '6156af316692f53d4e7a15db',
            TenLoaiSanPham: 'Vostro',
            HangSanXuat: "Asus",
            DanhMuc: 0,
            AnHien: true,
        },
        {
            _id: '6156af316692f53d4e7a15db',
            TenLoaiSanPham: 'Presicion',
            HangSanXuat: "Dell",
            DanhMuc: 0,
            AnHien: false,
        },
        {
            _id: '6156af316692f53d4e7a15db',
            TenLoaiSanPham: 'Latitude',
            HangSanXuat: "Dell",
            DanhMuc: 0,
            AnHien: true,
        },
    ];

    const columns = [
        {
            title: 'Tên loại sản phẩm',
            dataIndex: 'TenLoaiSanPham',
            key: 'TenLoaiSanPham',
            render: text => <a>{text}</a>,
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
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
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
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
        />
    );
}

export default CatalogTable;