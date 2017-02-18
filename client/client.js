/*
 * @author: tokei
 * @desc: Client JS
 * @date: 2017/2/15
 * @license: M.I.T
 */

/* eslint-disable strict */

import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';

let initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: 'Initial todos for demo purpose',
    }],
    user: {
        username: 'eddie32',
        id: 13
    }
};


let store = configureStore(initialState);


// configure and create our store
// var store = createStore(reducers, initialState) []
// pass the store into the App


render(
    // define the encompassing component
    // Dom element we want to mount it to
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
);
