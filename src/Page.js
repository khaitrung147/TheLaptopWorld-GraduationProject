// Site page
import Home_site from "./components/home_site";
import DetailProduct_site from "./components/productDetail_site";
import Product_site from "./components/product_site";
import Login from "./components/login";
import LoginSite from "./components/auth/login_site";
import Cart_site from "./components/cart_site";
import RegisterSite from "./components/auth/register";
// Admin page
import Dashboard_admin from "./components/dashboard_admin";
import Catalog_admin from "./components/catalog_admin";
import CatalogDetail_admin from "./components/catalog_admin/catalogDetail";
import Product_admin from "./components/product_admin";
import ProductCompany_admin from "./components/productCompany_admin";
import Order_admin from "./components/order_admin";
import CustomerAccount_admin from "./components/account_admin/customer";
import StaffAccount_admin from "./components/account_admin/staff";

const Page = {
  Site: [
    {
      path: "/",
      component: Home_site,
      exact: true,
    },
    {
      path: "/dang-nhap",
      component: Login,
      exact: true,
    },
    {
      path: "/san-pham",
      component: Product_site,
      exact: true,
    },
    {
      path: "/san-pham/:key",
      component: DetailProduct_site,
      exact: false,
    },
    {
      path: "/dang-nhap-site",
      component: LoginSite,
      exact: true,
    },
    {
      path: "/dang-ky-site",
      component: RegisterSite,
      exact: true,
    },
    {
      path: "/gio-hang",
      component: Cart_site,
      exact: true,
    },
  ],
  Admin: [
    {
      path: "/admin",
      component: Dashboard_admin,
      exact: true,
    },
    {
      path: "/admin/loai-san-pham",
      component: Catalog_admin,
      exact: true,
    },
    {
      path: "/admin/loai-san-pham/:id",
      component: CatalogDetail_admin,
      exact: false,
    },
    {
      path: "/admin/san-pham",
      component: Product_admin,
      exact: true,
    },
    {
      path: "/admin/hang-san-xuat",
      component: ProductCompany_admin,
      exact: true,
    },
    {
      path: "/admin/don-hang",
      component: Order_admin,
      exact: true,
    },
    {
      path: "/admin/tai-khoan-khach-hang",
      component: CustomerAccount_admin,
      exact: true,
    },
    {
      path: "/admin/tai-khoan-nhan-vien",
      component: StaffAccount_admin,
      exact: true,
    },
  ],
};

export default Page;
