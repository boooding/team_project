import React, {useEffect} from "react"
import Layout from "./Layout";
import {Button, Form, Input, Result} from "antd";
import {resetSignup, signup, SignupPayload} from "../../store/actions/authority.actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {AuthState} from "../../store/reducers/authority.reducer";
import {Link} from "react-router-dom";

const Signup  = () => {

    // get dispatch
    const dispatch = useDispatch()

    // get the result of signup
    const auth = useSelector<AppState, AuthState>(state => state.auth)

    const onFinish = (value: SignupPayload) => {
        dispatch(signup(value))
    }

    // clear the form after signup success
    const [form] = Form.useForm(); // get the form first
    useEffect(() => {
        if (auth.signup.loaded && auth.signup.success) {
            form.resetFields();
        }
    }, [auth]);

    // show success message the signup success
    const showSuccess = () => {
        if (auth.signup.loaded && auth.signup.success) {
            return (
                <Result
                    status="success"
                    title="Sign up success"
                    extra={[<Button type="primary">
                        <Link to="/signin">Sign in</Link>
                    </Button>]}
                />
            )
        }
    }

    // show error message
    const showError = () => {
        if (auth.signup.loaded && !auth.signup.success) {
            console.log(auth.signup)
            return (
                <Result
                    status="warning"
                    title="Sign up fail"
                    subTitle={auth.signup.message}
                />
            )
        }
    }

    // reset the form after leaving the page
    useEffect(() => {
        return () => {
            dispatch(resetSignup())
        };
    }, []);

    const signupForm = () => {
        return (
            <React.Fragment>
                <Form form={form} onFinish={onFinish}  style={{width:"400px",margin:"30px auto",textAlign:"center"}}>
                    <h3>Mini-blog</h3>
                    <Form.Item name="username" label="username">
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
            </React.Fragment>
        )
    }
    return <Layout title="Sign up" subTitle="" >
        {showSuccess()}
        {showError()}
        {!(auth.signup.loaded && auth.signup.success) && signupForm()}
    </Layout>
}
export default Signup;