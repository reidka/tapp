import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import {permissions} from "../role_permissions"

const PrivateRoute = connect(({ auth }) => ({ auth }))(
    ({ component: Component, path: Path, auth, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                permissions[auth.user_type].includes(Path) || auth.user_type === 'User' ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    )
)

export default PrivateRoute
