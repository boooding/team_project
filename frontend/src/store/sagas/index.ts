import {all} from 'redux-saga/effects'
import authoritySaga from "./authority.saga";

export default function* rootSaga () {
    yield all([authoritySaga()])
}