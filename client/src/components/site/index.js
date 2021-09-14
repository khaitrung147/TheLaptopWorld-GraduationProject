import React, { Component } from "react";
import Cpn from "../../component";
import { Switch, Route, Link } from "react-router-dom";

class Index extends Component {
  state = {};
  render() {
    return (
      <>
        <Cpn.Site.Header></Cpn.Site.Header>
        <Switch>
          <Route path="/" component={Cpn.Site.Home_site} />
        </Switch>
        <Cpn.Site.Footer></Cpn.Site.Footer>
      </>
    );
  }
}

export default Index;
