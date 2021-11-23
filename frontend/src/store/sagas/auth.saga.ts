import {takeEvery,put} from 'redux-saga/effects'
import {
    SIGNIN,
    SigninAction,
    signinFail,
    signinSuccess,
    SIGNUP,
    SignupAction,
    signupFail,
    signupSuccess
} from "../actions/auth.actions";
import axios from "axios";
import {API} from "../../config";

function* handleSignup(action: SignupAction) {
    try {
        yield axios.post(`${API}/users/signup`, action.payload)
        yield put(signupSuccess())
    } catch (error: any) {
        yield put(signupFail(error.response.data.message))
    }
}

function* handleSignin(action: SigninAction) {
    try {
        let response = yield axios.post(`${API}/users/signin`, action.payload)
        localStorage.setItem("jwt", JSON.stringify(response.data))
        yield put(signinSuccess())
    } catch (error: any) {
        yield put(signinFail(error.response.data.error))
    }
}

export default function* authSaga () {
    yield takeEvery(SIGNUP, handleSignup)
    yield takeEvery(SIGNIN, handleSignin)

}