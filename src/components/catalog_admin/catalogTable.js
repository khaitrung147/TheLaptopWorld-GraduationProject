import React, { useState } from 'react';
import { Table, Tag, Space, Button, Popconfirm, notification } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

function CatalogTable(props) {
    const { data, productCompany, loading } = props;
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
            title: 'Tên loại sản phẩm',
            dataIndex: 'TenLoaiSanPham',
            key: 'TenLoaiSanPham',
            render: (text,data) => <Link to={`/admin/loai-san-pham/${data._id}`}>{text}</Link>,
        },
        {
            title: 'Hãng sản xuất',
            dataIndex: 'HangSanXuat',
            key: 'HangSanXuat',
            render: () => <>{productCompany}</>
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
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (text, record) => (
        //         <Space size="middle">
        //             <Popconfirm
        //                 title="Bạn có chắc là muốn xoá?"
        //                 onConfirm={deleteConfirm}
        //                 onCancel={deleteCancel}
        //                 okText="Xoá"
        //                 cancelText="Huỷ"
        //             >
        //                 <Button>Xoá</Button>
        //             </Popconfirm>
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
        />
    );
}

export default CatalogTable;