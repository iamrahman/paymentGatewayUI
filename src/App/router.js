import React from "react";
import { Switch, Route, Router } from "react-router-dom";
// Containers
import { Dashboard, CardPayment } from "../Containers";
import { Routes } from "../Utils";

const history = Routes.history;

const ReactRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/card-payment" component={CardPayment} exact={true} />
        <Route path="/" component={Dashboard} exact={true} />
      </Switch>
    </Router>
  );
};

export default ReactRouter;
