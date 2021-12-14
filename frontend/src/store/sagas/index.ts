import {all} from 'redux-saga/effects'
import authoritySaga from "./authority.saga";
import userInformationSaga from "./userInformation.saga";

export default function* rootSaga () {
    yield all([authoritySaga(),userInformationSaga()])
}