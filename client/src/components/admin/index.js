import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Page from "../../Page";

class Index extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route path="/admin" exact component={Page.Admin.Dashboard} />
        </Switch>
      </>
    );
  }
}

export default Index;
