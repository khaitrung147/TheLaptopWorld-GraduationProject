import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute(props) {
  const Token = JSON.parse(localStorage.getItem("thelaptopworld_token"));
  if (!Token) {
    window.location.replace("/dang-nhap");
  }
  else if(Token.role===0){
    return <Route {...props} />;
  }
  else if(!Token.role){
    window.location.replace("/dang-nhap");
  }
   else {
    return <Route {...props} />;
  }
}

export default PrivateRoute;
