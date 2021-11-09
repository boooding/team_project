import React from "react"
import Layout from "./Layout";
import {Button, Form, Input} from "antd";
import Logo from "./Logo";

const Signin  = () => {
    return <Layout title="Sign in" subTitle="">
        <Logo/>
        <Form style={{width:"400px",margin:"0 auto"}}>
            <Form.Item name="name" label="username" >
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