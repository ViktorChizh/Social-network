import { FormType, LoginReduxForm } from "components/login/loginForm/LoginForm"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { getAuthUserData, login } from "redux/AuthReducer"
import { isLoggedInSelector } from "utils/selectors/selectors"
import s from "./Login.module.css"

class Login extends Component<mStPType & mDtPType> {
	componentDidMount() {
		this.props.getAuthUserData()
	}
	onSubmit = (formData: FormType) => {
		this.props.login(formData)
	}
	render() {
		if (this.props.isLoggedIn) return <Redirect to={"/profile"} />
		return (
			<div className={s.loginBlock}>
				<LoginReduxForm onSubmit={this.onSubmit} />
			</div>
		)
	}
}

const mapStateToProps = (state: StateReduxType): mStPType => ({
	isLoggedIn: isLoggedInSelector(state),
})
type mStPType = {
	isLoggedIn: boolean
}
type mDtPType = {
	login: (formData: FormType) => void
	getAuthUserData: () => void
}

export const LoginContainer = compose<ComponentType>(
	connect<mStPType, mDtPType, unknown, StateReduxType>(mapStateToProps, { login, getAuthUserData }),
)(Login)
