import React from "react"
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/core/Home";
import Signin from "./components/core/Signin";
import Signup from "./components/core/Signup";
import Blog from "./components/core/Blog";

const Routes  = () => {
    return <HashRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/blog" component={Blog}></Route>
        </Switch>
    </HashRouter>
}
export default Routes;