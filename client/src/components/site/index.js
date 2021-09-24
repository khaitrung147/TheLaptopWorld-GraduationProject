import React, { Component } from "react";
import Cpn from "../../component";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./scrollTop";

class Index extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Cpn.Site.Header />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Cpn.Site.Home_site} />
            <Route path="/productdetail" component={Cpn.Site.Detail} />
          </Switch>
        </ScrollToTop>
        <Cpn.Site.Footer />
      </BrowserRouter>
    );
  }
}

export default Index;
