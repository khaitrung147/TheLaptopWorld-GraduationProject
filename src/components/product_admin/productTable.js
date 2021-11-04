import React, { useState } from 'react';
import { Table, Tag, Space, Button, notification,Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

function ProductTable(props) {
    const { data, catalogs, loading } = props;
    const location= window.location
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

    const filterLoaiSanPham = (LoaiSanPham) => {
        let cata= [];
        cata = catalogs?.filter(e=> e._id===LoaiSanPham);
        if(cata){
            return cata[0].TenLoaiSanPham;
        }
        else return null
    }

    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'TenSanPham',
            key: 'TenSanPham',
            render: (TenSanPham, data) => <Link to={`/admin/san-pham/${data._id}`}>{TenSanPham}</Link>,
        },
        {
            title: 'URL',
            dataIndex: 'Key',
            key: 'Key',
            render: Key => <a target="_blank" href={`${location.origin}/san-pham/${Key}`} rel="noreferrer">{`${location.origin}/san-pham/${Key}`}</a>
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'LoaiSanPham',
            key: 'LoaiSanPham',
            render: LoaiSanPham => filterLoaiSanPham(LoaiSanPham)
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

export default ProductTable;