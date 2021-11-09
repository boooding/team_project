import {combineReducers} from "redux";
import {connectRouter, RouterState} from 'connected-react-router'
import {History} from 'history'
import authReducer from "./auth.reducer";

export interface AppState {
    router: RouterState
    auth: AppState
}
const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        auth: authReducer
    })

export default createRootReducer;