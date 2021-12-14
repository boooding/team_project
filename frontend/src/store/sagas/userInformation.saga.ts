import axios from "axios";
import {UserInformation} from "../models/userInformation";
import {API} from "../../config";
import {put, takeEvery} from "redux-saga/effects";
import {
    GET_USER_INFORMATION,
    GetUserInformationAction,
    getUserInformationSuccess
} from "../actions/userInformation.actions";

function* handleGetUserInformation(action: GetUserInformationAction) {
    try {
        let response = yield axios.get<UserInformation>(`${API}/users/${action.id}`)
        console.log(response)
        yield put(getUserInformationSuccess(response.data))
    }
    catch (e) {
        console.log(e)
    }
}

export default function* userInformationSaga() {
    yield takeEvery(GET_USER_INFORMATION, handleGetUserInformation)
}