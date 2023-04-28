import { ADD_EVENT, DELETE_EVENT, FAIL_REQUEST, GET_EVENT_LIST, GET_EVENT_OBJ, MAKE_REQUEST } from "./ActionType"

const initialstate = {
    loading: true,
    userlist: [],
    userobj: {},
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_EVENT_LIST:
            return {
                loading: false,
                errmessage: '',
                userlist:action.payload,
                userobj:{}
            }
            case DELETE_EVENT:return{
                ...state,
                loading:false
            }
            case ADD_EVENT:return{
                ...state,
                loading:false
            }
            case GET_EVENT_OBJ:return{
                ...state,
                loading:false,
                userobj:action.payload
            }
        default: return state
    }
}