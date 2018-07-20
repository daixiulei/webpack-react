import React,{Component} from "react";
import {Router,Route,hashHistory} from "react-router";
import * as components from "../containers";

const {Test,Home}=components
export default <Router history={hashHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/test" component={Test}></Route>
</Router>