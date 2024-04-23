import { FormType, LoginReduxForm } from "components/login/loginForm/LoginForm"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { login } from "redux/AuthReducer"
import s from "./Login.module.css"

class Login_ extends Component<mapStateToPropsType & mapDispatchToPropsType> {
	onSubmit = (formData: FormType) => {
		this.props.login(formData)
	}
	render() {
		if (this.props.isAuth) return <Redirect to={"/profile"} />
		return (
			<div className={s.loginBlock}>
				<LoginReduxForm onSubmit={this.onSubmit} />
			</div>
		)
	}
}

const mapStateToProps = (state: StateReduxType): mapStateToPropsType => ({
	isAuth: state.auth.isAuth,
})
type mapStateToPropsType = {
	isAuth: boolean
}
type mapDispatchToPropsType = {
	login: (formData: FormType) => void
}

export const Login = compose<ComponentType>(
	connect<mapStateToPropsType, mapDispatchToPropsType, unknown, StateReduxType>(mapStateToProps, { login: login }),
)(Login_)
