// Combine multiple reducers

import { combineReducers } from 'redux'
import ListReducer from './ListReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({

    todos: ListReducer,

    user: UserReducer,

})

export default rootReducer;