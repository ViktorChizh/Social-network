import React from "react"
import { InjectedFormProps, reduxForm } from "redux-form"
import { emailValidator, minLengthCreator, required } from "utils/validators/textAreaValidator"
import { Input } from "components/common/validatedComponent/ValidatedComponent"
import { createField } from "components/common/createField/createField"
import s from "./LoginForm.module.css"

const minLength4 = minLengthCreator(4)
const LoginForm = (props: InjectedFormProps<FormType, OwnPropsType> & OwnPropsType) => {
	return (
		<div className={s.main}>
			<h1>LOGIN</h1>
			<p>
				Free account: <b>free@samuraijs.com</b>
			</p>
			<p>
				Password: <b>free</b>
			</p>
			<form className={s.formBlock} onSubmit={props.handleSubmit}>
				{createField("", Input, "email", "email", "email", [required, emailValidator])}
				{createField("", Input, "password", "password", "password", [required, minLength4])}
				{createField("", "input", "rememberMe", "checkbox", '', [], <i>remember me</i>)}
				{props.error && <div className={s.errorServer}>{props.error}</div>}
				{props.captchaUrl && <img src={props.captchaUrl} width="100%" height="20%" alt={"captcha"} />}
				{props.captchaUrl && createField("", Input, "captcha", "text", "captcha", [required])}
				<div className={s.button}>
					<button>Login</button>
				</div>
			</form>
		</div>
	)
}
export const LoginReduxForm = reduxForm<FormType, OwnPropsType>({ form: "login" })(LoginForm)

export type FormType = {
	email: string
	password: string
	rememberMe: boolean
	captcha?: string
}
type OwnPropsType = {
	captchaUrl: string | null
}
