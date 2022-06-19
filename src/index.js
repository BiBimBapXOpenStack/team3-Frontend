import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import setAuthorizationToken from "./router/setAuthorizationToken";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducer';
//import 'antd/dist/antd.css';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
    <Provider
         store={createStoreWithMiddleware(Reducer,
             window.__REDUX_DEVTOOLS_EXTENSION__ &&
             window.__REDUX_DEVTOOLS_EXTENSION__()
             )}
        >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
