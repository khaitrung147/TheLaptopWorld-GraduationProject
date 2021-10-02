import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page from "./Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Page.Site.Index_site} />
          <Route path="/admin" exact component={Page.Admin.Index_admin} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
