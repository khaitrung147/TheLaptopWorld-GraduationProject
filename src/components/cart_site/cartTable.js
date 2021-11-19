import React from 'react';
import { Table, Tag, Space } from 'antd';


function CartTable() {
    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Số lượng',
            dataIndex: 'count',
            key: 'count',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <Table
            className='cart-table'
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
}

export default CartTable;