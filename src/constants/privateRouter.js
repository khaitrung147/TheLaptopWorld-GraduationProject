import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
    const Token = localStorage.getItem('thelaptopworld_token');

    if(Token){
        window.location.replace('/dang-nhap')
    }
    else{
        return <Route {...props} />
    }
}

export default PrivateRoute;