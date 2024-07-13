import { Form, LoginReduxForm } from "components/login/loginForm/LoginForm"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { StateRedux } from "redux/_Store-Redux"
import { getAuthUserData, login } from "redux/AuthReducer"
import { captchaUrlSelector, isLoggedInSelector } from "utils/selectors/selectors"
import s from "./Login.module.css"

class Login extends Component<mStPType & mDtPType> {
	componentDidMount() {
		this.props.getAuthUserData()
	}

	componentDidUpdate(prevProps: Readonly<mStPType & mDtPType>) {
		if (this.props.captchaUrl !== prevProps.captchaUrl) {
		}
	}

	onSubmit = (formData: Form) => {
		this.props.login(formData)
	}
	render() {
		if (this.props.isLoggedIn) return <Redirect to={"/profile"} />
		return (
			<div className={s.loginBlock}>
				<LoginReduxForm onSubmit={this.onSubmit} captchaUrl={this.props.captchaUrl} />
			</div>
		)
	}
}

const mapStateToProps = (state: StateRedux): mStPType => ({
	isLoggedIn: isLoggedInSelector(state),
	captchaUrl: captchaUrlSelector(state),
})
type mStPType = {
	isLoggedIn: boolean
	captchaUrl: string | null
}
type mDtPType = {
	login: (formData: Form) => void
	getAuthUserData: () => void
}

export const LoginContainer = compose<ComponentType>(
	connect<mStPType, mDtPType, unknown, StateRedux>(mapStateToProps, { login, getAuthUserData }),
)(Login)
