import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cpn from "./component";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Cpn.Site.Index_site} />
          <Route path="/admin" exact component={Cpn.Admin.Index_admin} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
