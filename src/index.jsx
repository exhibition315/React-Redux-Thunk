/* global __BUILD__ */
/* eslint no-undef: "error" */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';
import routeLoader from './routers/routeLoader';

console.log('Process environment variable');
console.log(`__BUILD__: ${__BUILD__}`);

routeLoader.init();

const store = applyMiddleware(thunk)(createStore)(reducers);
const route = routeLoader.getRoute();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={hashHistory} routes={route} />
        </Provider>
    ), document.getElementById('root')
);

// reference
// https://github.com/nodejitsu/node-http-proxy //專門給 dispatcher server 做轉址, 但現在只用 nginx, 所以不用到 dispatcher server.
