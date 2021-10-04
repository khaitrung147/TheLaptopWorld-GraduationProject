import Header from "./components/site/header";
import Footer from "./components/site/footer";
import Index_site from "./components/site/index";
import Home_site from "./components/home_site/home";
import Index_admin from "./components/admin/index";
import Dashboard from "./components/admin/dashboard";

const Component = {
  Site: {
    Footer,
    Header,
    Index_site,
    Home_site,
  },
  Admin: {
    Index_admin,
    Dashboard,
  },
};

export default Component;
