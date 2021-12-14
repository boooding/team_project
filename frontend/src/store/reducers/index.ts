import {combineReducers} from "redux";
import {connectRouter, RouterState} from 'connected-react-router'
import {History} from 'history'
import authorityReducer, {AuthState} from "./authority.reducer";
import userInformationReducer, {UserInformationState} from "./userInformation.reducer";

export interface AppState {
    router: RouterState
    auth: AuthState
    userInformation: UserInformationState
}
const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        auth: authorityReducer,
        userInformation: userInformationReducer
    })

export default createRootReducer;