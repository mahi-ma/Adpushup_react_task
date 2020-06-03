import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home";

function RootRouter() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    </BrowserRouter>
  );
}

export default RootRouter;