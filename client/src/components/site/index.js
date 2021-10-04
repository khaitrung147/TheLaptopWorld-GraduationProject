import React, { Component } from "react";
<<<<<<< HEAD
import Cpn from "../../component";
import { Switch, Route, Link } from "react-router-dom";
=======
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Page from "../../Page";
import ScrollToTop from "./scrollTop";
import Footer from "./footer";
import Header from "./header";
>>>>>>> main

class Index extends Component {
  state = {};
  render() {
    return (
<<<<<<< HEAD
      <>
        <Cpn.Site.Header></Cpn.Site.Header>
        <Switch>
          <Route path="/" component={Cpn.Site.Home_site} />
        </Switch>
        <Cpn.Site.Footer></Cpn.Site.Footer>
      </>
=======
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Page.Site.Home_site} />
            <Route path="/san-pham/:key" component={Page.Site.Detail} />
            <Route path="/san-pham" component={Page.Site.Product_site} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
>>>>>>> main
    );
  }
}

export default Index;
