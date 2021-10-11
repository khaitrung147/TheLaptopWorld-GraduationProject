// Site page
import Home_site from "./components/home_site";
import DetailProduct_site from "./components/productDetail_site";
import Product_site from "./components/product_site";

// Admin page
import Dashboard_admin from "./components/admin/dashboard";

const Page = {
  Site: [
    {
      path: '/',
      component: Home_site,
      exact: true
    },
    {
      path: '/san-pham',
      component: Product_site,
      exact: false
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
    }
  ]
};

export default Page;
