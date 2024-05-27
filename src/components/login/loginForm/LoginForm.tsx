import { Input } from "components/common/validatedComponent/ValidatedComponent"
import React from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { emailValidator, minLengthCreator, required } from "utils/validators/textAreaValidator"
import s from "./LoginForm.module.css"

const minLength4 = minLengthCreator(4)
const LoginForm = (props: InjectedFormProps<FormType, OwnPropsType> & OwnPropsType) => {
	return (
		<div className={s.main}>
			<h1>LOGIN</h1>
			<p>данные тестового аккаунта:</p>
			<p>Email: free@samuraijs.com</p>
			<p>Password: free</p>
			<form className={s.formBlock} onSubmit={props.handleSubmit}>
				<div>
					<Field
						component={Input}
						name={"email"}
						type="email"
						placeholder="LoginContainer"
						validate={[required, emailValidator]}
					/>
				</div>
				<div>
					<Field
						component={Input}
						name={"password"}
						type="password"
						placeholder="Password"
						validate={[required, minLength4]}
					/>
				</div>
				<div>
					<Field component={"input"} type="checkbox" name={"rememberMe"} /> <i>remember me</i>
				</div>
				{props.error && <div className={s.errorServer}>{props.error}</div>}
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
