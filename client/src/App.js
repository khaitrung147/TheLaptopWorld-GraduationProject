import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Site from './components/site';
import Admin from "./components/admin";
import Login from "./components/login";
import Page from "./Page";
import PrivateRoute from "./constants/privateRouter";

function App() {
  const url = window.location.pathname.split("/");
  console.log('url :>> ', url);
  return (
    <Router>
      <div className="App">
          {
            (url[1]!=="admin" && url[1]!=="dang-nhap")?
            <Site>
              {
                Page.Site.map((page)=>
                  <Route path={page.path} exact={page.exact} component={page.component} />
                )
              }
            </Site>
            :
            <Route path="/dang-nhap" exact component={Login} />
          }
          {
            (url[1]==="admin")?
            <Admin>
            {
              Page.Admin.map(page =>
                <PrivateRoute path={page.path} exact={page.exact} component={page.component} />
              )
            }
            </Admin>
            :null
          }
      </div>
    </Router>
  );
}

export default App;
