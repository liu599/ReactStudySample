import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/CombineReducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


let finalCreateStore = compose(
    applyMiddleware(thunk, logger())
)(createStore)
// add middleware

export default function configureStore(initialState = {todos: [], user: {}}) {
    return finalCreateStore(rootReducer, initialState);
}