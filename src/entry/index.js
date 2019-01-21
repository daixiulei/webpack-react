import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, HashRouter as Router, Route, Redirect } from "react-router-dom";
import "../styles/index.css";
import "../styles/common.css";
import components from "../containers";
import {AppContainer} from "react-hot-loader";

const {Home,Test,NoMatch} = components;

ReactDOM.render(<AppContainer>
        <Router>
            <Switch>
                <Route extra path="/home" component={Home}></Route>
                <Route path="/test" component={Test}></Route>
                <Redirect from="/others" to="test"></Redirect>
                <Redirect from="/" to="/home"></Redirect>
                <Route component={NoMatch}></Route>
            </Switch>
        </Router>
    </AppContainer>
    , document.getElementById("root")
)

if (module.hot) {
    module.hot.accept()
}
