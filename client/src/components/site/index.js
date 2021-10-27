import React, { Children, Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Page from "../../Page";
import ScrollToTop from "./scrollTop";
import Footer from "./footer";
import Header from "./header";

const Index = ({ children }) => {
  const url = window.location.pathname.split("/");
  return (
    <div>
      {url[1] === "dang-nhap" ? null : <Header />}
      <ScrollToTop>{children}</ScrollToTop>
      {url[1] === "dang-nhap" ? null : <Footer />}
    </div>
  );
};

export default Index;
