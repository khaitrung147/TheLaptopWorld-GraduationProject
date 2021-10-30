import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { Link } from 'react-router-dom';

function ProductTable(props) {
    const { data, catalogs, loading } = props;
    const location= window.location
    const [selectedRowKeys, setSelectedRowKeys]= useState([]);
    console.log('data :>> ', data);
    
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
            loading={loading}
            rowKey='_id'
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
        />
    );
}

export default ProductTable;