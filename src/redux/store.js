import { createStore, applyMiddleware, combineReducers } from "redux";
import listReduser from './listReducer'
import createReducer from './createReducer'
import authReducer from './authReducer'

import thunk from "redux-thunk";


const store = createStore(combineReducers({listReduser, createReducer, authReducer}),applyMiddleware(thunk))

export default store
