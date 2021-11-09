import React from "react"
import Layout from "./Layout";
import {Button, Form, Input} from "antd";

const Signin  = () => {
    return <Layout title="Sign in" subTitle="">

        <Form>
            <Form.Item name="name" label="username">
                <Input/>
            </Form.Item>
            <Form.Item name="pwd" label="password">
                <Input.Password />
            </Form.Item>
            <Form.Item style={{width:"15%",margin:"0 auto"}}>
                <Button type="primary" htmlType="submit" style={{width:"100%",margin:"0 auto"}}>
                    Sign in
                </Button>
            </Form.Item>

        </Form>
    </Layout>
}
export default Signin;