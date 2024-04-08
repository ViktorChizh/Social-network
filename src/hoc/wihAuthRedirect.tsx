import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { StateReduxType } from "redux/_Store-Redux"

type mStPType = {
	isAuth: boolean
}
const mapStateToProps = (state: StateReduxType) => ({
	isAuth: state.auth.isAuth,
})

export const wihAuthRedirect = (Component: ComponentType) => {
	class RedirectComponent extends React.Component<mStPType> {
		render() {
			if (!this.props.isAuth) return <Redirect to={"/login"} />
			return <Component {...this.props} />
		}
	}

	let ConnectedRedirectComponent = connect<mStPType, {}, unknown, StateReduxType>(mapStateToProps)(RedirectComponent)

	return ConnectedRedirectComponent
}
