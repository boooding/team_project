import React, {FC} from "react"
import {Redirect, Route, RouteProps} from "react-router-dom";
import {isAuth} from "../../commonFunction/auth";

interface ProtectedRouteProps extends RouteProps {
    component: React.ComponentType<any>
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
    component: Component,
    ...rest
}) => {
    return <Route {...rest} render={(props) => {
        const auth = isAuth();
        if (auth) {
            return <Component {...props}/>
        }
        return <Redirect to="/signin"/>
    }}>
        
    </Route>
}
export default ProtectedRoute;