import React from "react"
import Layout from "./Layout";
import {Button, Form, Input} from "antd";
import Logo from "./Logo";
import {signin, SigninPayload} from "../../store/actions/auth.actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {AuthState} from "../../store/reducers/auth.reducer";


const Signin  = () => {
    const dispatch = useDispatch()
    const onFinish = (signinValue: SigninPayload) => {
        // console.log(value)
        dispatch(signin(signinValue))
        console.log("here")
    }
    // @ts-ignore
    const auth = useSelector<AppState, AuthState>(state => state.auth)
    console.log(auth);
    return <Layout title="Sign in" subTitle="">
        <Logo/>
        <Form
            onFinish={onFinish}
            style={{width:"400px",margin:"0 auto"}}>
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