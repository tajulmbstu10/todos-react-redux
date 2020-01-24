import React from "react";
import { Route, Switch } from "react-router-dom";
import TodoApp from "../components/todoApp";
const Baserouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={TodoApp} />
    </Switch>
  </div>
);

export default Baserouter;
