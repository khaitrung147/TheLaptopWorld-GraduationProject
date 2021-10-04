import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page from "./Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={Cpn.Site.Index_site} />
          <Route path="/admin" component={Cpn.Admin.Index_admin} />
=======
          <Route path="/" component={Page.Site.Index_site} />
          <Route path="/admin" exact component={Page.Admin.Index_admin} />
>>>>>>> main
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
