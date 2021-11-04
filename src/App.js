import { BrowserRouter as Router, Route } from "react-router-dom";

import Site from './components/site';
import Admin from "./components/admin";
import Page from "./Page";
import PrivateRoute from "./constants/privateRouter";

function App() {
  const url = window.location.pathname.split("/");
  return (
    <Router>
      <div className="App">
          {
            (url[1]!=="admin")?
            <Site>
              {
                Page.Site.map((page)=>
                  <Route path={page.path} exact={page.exact} component={page.component} />
                )
              }
            </Site>
            :
            <Admin>
            {
              Page.Admin.map(page =>
                <PrivateRoute path={page.path} exact={page.exact} component={page.component} />
              )
            }
            </Admin>
          }
      </div>
    </Router>
  );
}

export default App;
