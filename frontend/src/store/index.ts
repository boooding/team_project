import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./reducers";
import {createHashHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
// import the development tools
import {composeWithDevTools} from "redux-devtools-extension";

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    createRootReducer(history),
    // listen the router status
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store;
