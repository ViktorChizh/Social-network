import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"

class Login_ extends Component<MStPType> {
	render() {
		if (this.props.isAuth) return <Redirect to={"/profile"} />
		return <h1>LOGIN</h1>
	}
}

const mapStateToProps = (state: StateReduxType): MStPType => ({
	isAuth: state.auth.isAuth,
})
type MStPType = {
	isAuth: boolean
}

export const Login = compose<ComponentType>(connect(mapStateToProps, {}))(Login_)
