import React, { Component } from "react";
import Cpn from "../../component";
import { Switch, Route, Link } from "react-router-dom";

class Index extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route path="/admin" exact component={Cpn.Admin.Dashboard} />
        </Switch>
      </>
    );
  }
}

export default Index;
