import React, { useState } from 'react';
import { Table, Space, Button, notification, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

function CatalogTable(props) {
    const { data, products, loading } = props;
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);
    
    function deleteConfirm(e) {
        notification.open({
            message: 'Xoá thành công',
            description:
              'Đã xoá thành công sản phẩm ...',
            icon: <DeleteOutlined style={{ color: '#52c41a' }} />,
        });
    }

    function deleteCancel(e) {
        
    }

    const totalRecordProduct = (productList, productCompanyId) => {
        let company= [];
        company = productList?.filter(e=> e.HangSanXuat===productCompanyId);
        return company?.length
    }

    const columns = [
        {
            title: 'Tên hãng sản xuất',
            dataIndex: 'TenHangSanXuat',
            key: 'TenHangSanXuat',
            render: (text,data) => <Link to={`/admin/hang-san-xuat/${data._id}`}>{text}</Link>,
        },
        {
            title: 'Số lượng sản phẩm hiện có',
            dataIndex: '_id',
            key: 'SoLuongSanPhamHienCo',
            render: (_id) => totalRecordProduct(products,_id),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Popconfirm
                        title="Bạn có chắc là muốn xoá?"
                        onConfirm={deleteConfirm}
                        onCancel={deleteCancel}
                        okText="Xoá"
                        cancelText="Huỷ"
                    >
                        <Button>Xoá</Button>
                    </Popconfirm>
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
            pagination={{ pageSize: 5}}
        />
    );
}

export default CatalogTable;