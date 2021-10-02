// Site page
import Index_site from "./components/site";
import Home_site from "./components/home_site";
import DetailProduct_site from "./components/productDetail_site";
import Product_site from "./components/product_site";

// Admin page
import Index_admin from "./components/admin/index";
import Dashboard_admin from "./components/admin/dashboard";

const Page = {
  Site: {
    Index_site,
    Home_site,
    DetailProduct_site,
    Product_site
  },
  Admin: {
    Index_admin,
    Dashboard_admin,
  },
};

export default Page;
