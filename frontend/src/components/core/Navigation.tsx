import React from "react"
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {RouterState} from "connected-react-router";
import {isAuth} from "../../commonFunction/auth";
import * as path from "path";

function useActive (currentPath: string, path: string): string {
    return currentPath === path ? "ant-menu-item-selected" : ""
}
const Navigation  = () => {
    const router = useSelector<AppState, RouterState>(state => state.router)
    const pathname = router.location.pathname;

    const isHome = useActive(pathname, "/")
    const isSignin = useActive(pathname, "/signin")
    const isSignup = useActive(pathname, '/signup')

    const isBlog = useActive(pathname, '/blog')
    const isArticle = useActive(pathname, '/article')
    return <Menu mode="horizontal" selectable={false}>
        <Menu.Item className={isHome}>
            <Link to="/">Mini-blog</Link>
        </Menu.Item>
        {
            !isAuth() &&
             <>
                <Menu.Item className={isSignin}>
                    <Link to="/signin">Sign in</Link>
                </Menu.Item>

                <Menu.Item className={isSignup}>
                    <Link to="/signup">Sign up</Link>
                </Menu.Item>
            </>
        }
        {
            isAuth() &&
            <>
                <Menu.Item className={isBlog}>
                    <Link to="/blog">blog</Link>
                </Menu.Item>
                <Menu.Item className={isArticle}>
                    <Link to="/article">Article</Link>
                </Menu.Item>
            </>
        }



    </Menu>
}
export default Navigation;