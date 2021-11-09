import React from "react"
import Layout from "./Layout";
import {Button, Form, Input} from "antd";
import {signup, SignupPayload} from "../../store/actions/auth.actions";
import {useDispatch} from "react-redux";

const Signup  = () => {
    // get dispatch
    const dispatch = useDispatch()
    const onFinish = (value: SignupPayload) => {
        dispatch(signup(value))
    }
    return <Layout title="Sign up" subTitle="">
        <Form onFinish={onFinish}>
            <Form.Item name="name" label="username">
                <Input/>
            </Form.Item>
            <Form.Item name="pwd" label="password">
                <Input.Password/>
            </Form.Item>
            <Form.Item style={{width:"15%",margin:"0 auto"}}>
                <Button type="primary" htmlType="submit" style={{width:"100%",margin:"0 auto"}}>
                    Sign up
                </Button>
            </Form.Item>

        </Form>
    </Layout>
}
export default Signup;