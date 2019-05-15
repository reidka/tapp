import { createReducer } from "redux-create-reducer"
import { LOGOUT, LOGIN_SUCCESS } from "./constants"

const initialState = {
    isLoggedIn: false,
    token: null,
    user_type: null,
}

const reducer = createReducer(initialState, {
    [LOGIN_SUCCESS]: (state, action) => ({ ...state, 
        isLoggedIn: true, 
        token: action.token, 
        user_type: action.user_type }),
    [LOGOUT]: state => ({ ...state, 
        isLoggedIn: false,
        token: null,
        user_type: null
     })
})

export default reducer
