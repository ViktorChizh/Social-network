import { Form, LoginReduxForm } from "components/login/loginForm/LoginForm"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { StateRedux } from "redux/_Store-Redux"
import { getAuthUserData, login } from "redux/AuthReducer"
import { captchaUrlSelector, isLoggedInSelector } from "utils/selectors/selectors"
import s from "./Login.module.css"

class Login extends Component<MStP & MDtP> {
	componentDidMount() {
		this.props.getAuthUserData()
	}

	componentDidUpdate(prevProps: Readonly<MStP & MDtP>) {
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

const mapStateToProps = (state: StateRedux): MStP => ({
	isLoggedIn: isLoggedInSelector(state),
	captchaUrl: captchaUrlSelector(state),
})
type MStP = {
	isLoggedIn: boolean
	captchaUrl: string | null
}
type MDtP = {
	login: (formData: Form) => void
	getAuthUserData: () => void
}

export const LoginContainer = compose<ComponentType>(
	connect<MStP, MDtP, unknown, StateRedux>(mapStateToProps, { login, getAuthUserData }),
)(Login)
