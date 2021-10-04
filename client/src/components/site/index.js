import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Page from "../../Page";
import ScrollToTop from "./scrollTop";
import Footer from "./footer";
import Header from "./header";

class Index extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Index;
