import { createStore, applyMiddleware, combineReducers } from "redux";
import listReduser from './listReducer'
import createReducer from './createReducer'

import thunk from "redux-thunk";


const store = createStore(combineReducers({listReduser, createReducer}),applyMiddleware(thunk))

export default store
