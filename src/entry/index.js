import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "../styles/index.css";
import "../styles/common.css";
import components from "../containers";

const {Home,Test,NoMatch} = components;

ReactDOM.render(<Router>
    <Switch>
        <Route extra path="/home" component={Home}></Route>
        <Route path="/test" component={Test}></Route>
        <Redirect from="/others" to="test"></Redirect>
        <Route component={NoMatch}></Route>
    </Switch>
</Router>, document.getElementById("root"))
