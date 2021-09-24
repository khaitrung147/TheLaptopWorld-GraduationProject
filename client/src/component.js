import Header from "./components/site/header";
import Footer from "./components/site/footer";
import Index_site from "./components/site/index";
// Home
import Home_site from "./components/home_site/home";
import Index_admin from "./components/admin/index";
import Dashboard from "./components/admin/dashboard";
import Brand from "./components/home_site/brand";
import Currency from "./components/home_site/currency";
import Products from "./components/home_site/currentproduct";
import News from "./components/home_site/news";
import Saleproduct from "./components/home_site/saleproduct";
import Slider_home from "./components/home_site/slider";
import Coming from "./components/home_site/upcoming";

//Porduct Detail
import Detail from "./components/productDetail_site/productDetail";
import ProductImg from "./components/productDetail_site/productImg_slide";
import ProductConfig from "./components/productDetail_site/product_config";
import Review from "./components/productDetail_site/detailReview";
import Rating from "./components/productDetail_site/rating";
import Comment from "./components/productDetail_site/comment";
const Component = {
  Site: {
    Footer,
    Header,
    Index_site,
    // Home
    Home_site,
    Brand,
    Currency,
    Products,
    News,
    Saleproduct,
    Slider_home,
    Coming,
    //Product Detail
    Detail,
    ProductImg,
    ProductConfig,
    Review,
    Rating,
    Comment,
  },
  Admin: {
    Index_admin,
    Dashboard,
  },
};

export default Component;
