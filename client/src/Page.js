// Site page
import Home_site from "./components/home_site";
import DetailProduct_site from "./components/productDetail_site";
import Product_site from "./components/product_site";
import Login from "./components/login";

// Admin page
import Dashboard_admin from "./components/dashboard_admin";
import Catalog_admin from "./components/catalog_admin";

const Page = {
  Site: [
    {
      path: '/',
      component: Home_site,
      exact: true
    },
    {
      path: '/dang-nhap',
      component: Login,
      exact: true
    },
    {
      path: '/san-pham',
      component: Product_site,
      exact: true
    },
    {
      path: '/san-pham/:key',
      component: DetailProduct_site,
      exact: false
    }
  ],
  Admin: [
    {
      path: '/admin',
      component: Dashboard_admin,
      exact: true
    },
    {
      path: '/admin/loai-san-pham',
      component: Catalog_admin,
      exact: false
    }
  ]
};

export default Page;
