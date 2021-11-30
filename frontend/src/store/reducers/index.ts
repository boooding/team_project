import {combineReducers} from "redux";
import {connectRouter, RouterState} from 'connected-react-router'
import {History} from 'history'
import authorityReducer, {AuthState} from "./authority.reducer";

export interface AppState {
    router: RouterState
    auth: AuthState
}
const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        auth: authorityReducer
    })

export default createRootReducer;