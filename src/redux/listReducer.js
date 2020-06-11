import {GET_LIST, SET_LIST} from './ActionType'


const initialState = {
    list:[],
    loading:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_LIST:
        return { ...state, ...payload }
    
    case SET_LIST:
        console.log(payload);
        const response = {list:Object.keys(payload), loading:true}
        return { ...state, ...response }
    default:
        return state
    }
}
