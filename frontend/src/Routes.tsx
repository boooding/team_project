import React from "react"
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/core/Home";
import Signin from "./components/core/Signin";
import Signup from "./components/core/Signup";
import Blog from "./components/Blog/Blog";
import ProtectedRoute from "./components/tools/ProtectedRoute";
import Article from "./components/Article/Article";
import ArticleEdition from "./components/Article/ArticleEdition";
import UserInformation from "./components/Test/UserInformation"
const Routes  = () => {
    return <HashRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/blog" component={Blog}/>
            <ProtectedRoute path="/article" component={Article}/>
            <ProtectedRoute path="/edit" component={ArticleEdition}/>
        {/*    Test*/}
            <Route path="/users" component={UserInformation}/>
        </Switch>
    </HashRouter>
}
export default Routes;