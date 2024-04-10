import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"

class Login_ extends Component<mapStateToPropsType> {
	render() {
		if (this.props.isAuth) return <Redirect to={"/profile"} />
		return <h1>LOGIN</h1>
	}
}

const mapStateToProps = (state: StateReduxType): mapStateToPropsType => ({
	isAuth: state.auth.isAuth,
})
type mapStateToPropsType = {
	isAuth: boolean
}

export const Login = compose<ComponentType>(
	connect<mapStateToPropsType, unknown, unknown, StateReduxType>(mapStateToProps, {}),
)(Login_)
