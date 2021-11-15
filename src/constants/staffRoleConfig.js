export const staffRole = [
    {
        roleName: 'ADMIN',
        PhanQuyen: 0,
        permission: [
            {
                accessURL: '/',
                view: true,
                edit: true
            },
            {
                accessURL: '/loai-san-pham',
                view: false,
                edit: false
            },
            {
                accessURL: '/hang-san-xuat',
                view: false,
                edit: false
            },
            {
                accessURL: '/san-pham',
                view: false,
                edit: false
            },
            {
                accessURL: '/tai-khoan-khach-hang',
                view: true,
                edit: true
            },
            {
                accessURL: '/tai-khoan-nhan-vien',
                view: true,
                edit: true
            },
            {
                accessURL: '/don-hang',
                view: false,
                edit: false
            }
        ]
    },
    {
        roleName: 'MANAGER',
        PhanQuyen: 1,
        permission: [
            {
                accessURL: '/',
                view: true,
                edit: false
            },
            {
                accessURL: '/loai-san-pham',
                view: true,
                edit: true
            },
            {
                accessURL: '/hang-san-xuat',
                view: true,
                edit: true
            },
            {
                accessURL: '/san-pham',
                view: true,
                edit: true
            },
            {
                accessURL: '/tai-khoan-khach-hang',
                view: true,
                edit: false
            },
            {
                accessURL: '/tai-khoan-nhan-vien',
                view: true,
                edit: false
            },
            {
                accessURL: '/don-hang',
                view: true,
                edit: false
            }
        ]
    },
    {
        roleName: 'SALER',
        PhanQuyen: 2,
        permission: [
            {
                accessURL: '/',
                view: true,
                edit: false
            },
            {
                accessURL: '/loai-san-pham',
                view: true,
                edit: false
            },
            {
                accessURL: '/hang-san-xuat',
                view: true,
                edit: false
            },
            {
                accessURL: '/san-pham',
                view: true,
                edit: false
            },
            {
                accessURL: '/tai-khoan-khach-hang',
                view: false,
                edit: false
            },
            {
                accessURL: '/tai-khoan-nhan-vien',
                view: false,
                edit: false
            },
            {
                accessURL: '/don-hang',
                view: true,
                edit: true
            }
        ]
    },
    {
        roleName: 'SHIPPER',
        PhanQuyen: 3,
        permission: [
            {
                accessURL: '/',
                view: false,
                edit: false
            },
            {
                accessURL: '/loai-san-pham',
                view: false,
                edit: false
            },
            {
                accessURL: '/hang-san-xuat',
                view: false,
                edit: false
            },
            {
                accessURL: '/san-pham',
                view: false,
                edit: false
            },
            {
                accessURL: '/tai-khoan-khach-hang',
                view: false,
                edit: false
            },
            {
                accessURL: '/tai-khoan-nhan-vien',
                view: false,
                edit: false
            },
            {
                accessURL: '/don-hang',
                view: true,
                edit: true
            }
        ]
    },
]