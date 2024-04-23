import React, { FC } from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import s from "./LoginForm.module.css"

const LoginForm: FC<InjectedFormProps<FormType, OwnPropsType> & OwnPropsType> = (props) => {
	return (
		<div className={s.main}>
			<h1>LOGIN</h1>
			<form className={s.formBlock} onSubmit={props.handleSubmit}>
				<div>
					<Field component={"input"} name={"email"} placeholder="Login" />
				</div>
				<div>
					<Field component={"input"} name={"password"} placeholder="Password" />
				</div>
				<div>
					<Field component={"input"} type="checkbox" name={"rememberMe"} /> <i>remember me</i>
				</div>
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
}
type OwnPropsType = {}
