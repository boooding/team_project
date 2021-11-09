import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import {Provider} from "react-redux";
import store, {history} from "./store";
import {ConnectedRouter} from "connected-react-router";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);


