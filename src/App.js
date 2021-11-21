import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

import Users from "./pages/Users";
import User from "./pages/User";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/user/:id" component={User} />
      </Switch>
    </div>
  );
}
