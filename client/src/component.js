import Header from "./components/site/header";
import Footer from "./components/site/footer";
import Index_site from "./components/site/index";
import Home_site from "./components/home_site/home";
import Index_admin from "./components/admin/index";
import Dashboard from "./components/admin/dashboard";
import Brand from "./components/home_site/brand";
import Currency from "./components/home_site/currency";
import Product from "./components/home_site/currentproduct";
import News from "./components/home_site/news";
import Saleproduct from "./components/home_site/saleproduct";
import Slider_home from "./components/home_site/slider";
import Coming from "./components/home_site/upcoming";

const Component = {
  Site: {
    Footer,
    Header,
    Index_site,
    Home_site,
    Brand,
    Currency,
    Product,
    News,
    Saleproduct,
    Slider_home,
    Coming,
  },
  Admin: {
    Index_admin,
    Dashboard,
  },
};

export default Component;
