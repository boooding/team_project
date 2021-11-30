import React from "react"
import Layout from "./Layout";
import {Button, Form, Input, Result} from "antd";
import {signin, SigninPayload} from "../../store/actions/authority.actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {AuthState} from "../../store/reducers/authority.reducer";
import {isAuth} from "../../commonFunction/auth";
import {Redirect} from "react-router-dom";



const Signin  = () => {
    const dispatch = useDispatch()
    const onFinish = (signinValue: SigninPayload) => {
        // console.log(value)
        dispatch(signin(signinValue))
    }
    // get the signin result
    const auth = useSelector<AppState, AuthState>(state => state.auth)
    // if signin fail, handle the fail message
    const showError = () => {
        if (auth.signin.loaded && !auth.signin.success) {
            return(
                <Result
                    status="warning"
                    title="Sign in fail"
                    subTitle={auth.signin.message}
                />
            )
        }
    }
    // if success, jump to the user home page
    const signinSuccessAndRedirectToUserPage = () => {
        const authInfo = isAuth();
        if (authInfo) {
            alert("Sign in Success")
            return <Redirect to="/blog"/>
        }
    }


    // hide the signin and signup link in the navigation, display the user home page
    return <Layout title="Sign in" subTitle="">
        {showError()}
        {signinSuccessAndRedirectToUserPage()}
        <Form onFinish={onFinish}  style={{width:"400px",margin:"30px auto",textAlign:"center"}}>
            <h3>Mini-blog</h3>
            <Form.Item name="username" label="username" >
                <Input/>
            </Form.Item>
            <Form.Item name="password" label="password">
                <Input.Password />
            </Form.Item>
            <Form.Item style={{width:"150px",margin:"0 auto"}}>
                <Button type="primary" htmlType="submit" style={{width:"100%",margin:"0 auto"}}>
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    </Layout>
}
export default Signin;