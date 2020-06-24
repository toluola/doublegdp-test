import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList from "../components/TaskList";
import AddList from "../components/AddList";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={TaskList} />
      <Route path="/add" exact component={AddList}/>
    </Switch>
  </Router>
);