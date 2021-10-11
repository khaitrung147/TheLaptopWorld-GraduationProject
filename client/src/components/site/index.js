import React, { Children, Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Page from "../../Page";
import ScrollToTop from "./scrollTop";
import Footer from "./footer";
import Header from "./header";

const Index = ({children}) => {
    return (
      <div>
        <Header />
          <ScrollToTop>
            {children}
          </ScrollToTop>
        <Footer />
      </div>
    );
}

export default Index;
