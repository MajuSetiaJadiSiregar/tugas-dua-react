import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route, BrowserRouter } from "react-router-dom";
import MenCloting from "./category/MenCloting";
import HomePage from "./parts/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/men" component={MenCloting} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
