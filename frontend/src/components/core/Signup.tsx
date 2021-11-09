import React from "react"
import Layout from "./Layout";
import {Button, Form, Input} from "antd";
import {signup, SignupPayload} from "../../store/actions/auth.actions";
import {useDispatch} from "react-redux";
import Logo from "./Logo";

const Signup  = () => {
    // get dispatch
    const dispatch = useDispatch()
    const onFinish = (value: SignupPayload) => {
        dispatch(signup(value))
    }
    return <Layout title="Sign up" subTitle="" >
        <Logo/>
        <Form onFinish={onFinish}  style={{width:"400px",margin:"0 auto"}}>
            <Form.Item name="name" label="username">
                <Input/>
            </Form.Item>
            <Form.Item name="password" label="password">
                <Input.Password/>
            </Form.Item>
            <Form.Item style={{width:"150px",margin:"0 auto"}}>
                <Button type="primary" htmlType="submit" style={{width:"100%",margin:"0 auto"}}>
                    Sign up
                </Button>
            </Form.Item>
        </Form>
    </Layout>
}
export default Signup;