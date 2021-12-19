import {
    DesktopOutlined,
    DashboardOutlined,
    BarsOutlined,
    TeamOutlined,
    ShoppingCartOutlined,
    ToolOutlined,
    ContactsOutlined
  } from '@ant-design/icons';

const menuItemConfig= [
    // {
    //     key: 'admin',
    //     path: '/admin',
    //     icon: <DashboardOutlined />,
    //     name: 'Dashboard',
    //     submenu: null,
    //     role:[0, 1, 2, 3],
    // },
    {
        key: 'don-hang',
        path: '/admin',
        icon:<ShoppingCartOutlined />,
        name: 'Quản lí đơn hàng',
        submenu: null,
        role: [1, 2 ,3],
    },
    {
        key: 'loai-san-pham',
        path: null,
        icon: <BarsOutlined />,
        name: 'Loại sản phẩm',
        submenu: [
            // {
            //     path: '/admin/them-loai-san-pham',
            //     name: 'Thêm loại sản phẩm',
            // },
            {
                path: '/admin/loai-san-pham',
                name: 'Quản lý loại sản phẩm',
            },
        ],
        role: [1],
    },
    {
        key: 'hang-san-xuat',
        path: null,
        icon: <ToolOutlined />,
        name: 'Hãng sản xuất',
        submenu: [
            // {
            //     path: '/admin/them-hang-san-xuat',
            //     name: 'Thêm hãng sản xuất',
            // },
            {
                path: '/admin/hang-san-xuat',
                name: 'Quản lý hãng sản xuất',
            },
        ],
        role:[1],
    },
    {
        key: 'san-pham',
        path: null,
        icon: <DesktopOutlined />,
        name: 'Sản phẩm',
        submenu: [
            // {
            //     path: '/admin/them-san-pham',
            //     name: 'Thêm sản phẩm',
            // },
            {
                path: '/admin/san-pham',
                name: 'Quản lý sản phẩm',
            },
        ],
        role: [1, 2],
    },
    {
        key: 'tai-khoan',
        path: null,
        icon: <TeamOutlined />,
        name: 'Quản lý tài khoản',
        submenu: [
            {
                path: '/admin/tai-khoan-khach-hang',
                name: 'Khách hàng',
            },
            {
                path: '/admin/tai-khoan-nhan-vien',
                name: 'Nhân viên',
            },
        ],
        role: [0],
    },
    {
        key: 'lien-he-khach-hang',
        path: '/admin/lien-he-khach-hang',
        icon:<ContactsOutlined />,
        name: 'Liên hệ khách hàng',
        submenu: null,
        role: [1, 2],
    },
]

export default menuItemConfig