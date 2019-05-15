import { LOGOUT, LOGIN_SUCCESS } from "./constants"
import { error } from "react-notification-system-redux"
import { errorProps } from "../notifications/constants"

export const loginRequest = () => dispatch => {
    // Call API
    dispatch(loginSuccess())
}
export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, token: payload.token, user_type: payload.type })
export const loginError = payload => dispatch =>
    dispatch(error({ ...errorProps, mesage: payload.message }))
export const logout = () => ({ type: LOGOUT })

export const mockAuthenticate = (utorid) => async dispatch => {
    console.log('dispatching request')
    const res = await fetch(`/api/v1/authenticate/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'utorid': utorid})
    })
    const data = await res.json()
    if (res.status === 200) {
        console.log(data)
        dispatch(loginSuccess(data))
    } else {
        dispatch(error({ ...errorProps, message: res.statusText }))
    }
}
