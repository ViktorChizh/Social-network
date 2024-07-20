import { createField } from "components/common/createField/createField"
import { Input, TextArea } from "components/common/validatedComponent/ValidatedComponent"
import s from "components/login/loginForm/LoginForm.module.css"
import React from "react"
import { InjectedFormProps, reduxForm } from "redux-form"
import { ProfileUser } from "redux/ProfileReducer"
import { required } from "utils/validators/textAreaValidator"

export const _ProfileFormData = (props: InjectedFormProps<ProfileForm, OwnPropsType> & OwnPropsType) => {
	const { profile } = props
	return (
		<div
			style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "space-between", gap: "5px" }}>
			<form style={{ color: "white", width: "100%" }} onSubmit={props.handleSubmit}>
				{createField(<b>Full Name: </b>, Input, "fullName", "text", "full name", [required])}
				{createField(<b>Looking for a job: </b>, "input", "lookingForAJob", "checkbox",'',[])}
				{createField(<b>My professional skills: </b>, TextArea, "lookingForAJobDescription", "text", "Skills", [required])}
				{createField(<b>About me: </b>, Input, "aboutMe", "text", "About me", [required])}
				<div style={{ width: "100%" }}>
					<b>Contacts: </b>
					{profile.contacts &&
						Object.keys(profile.contacts).map((key) => {
							return (
								<div
									style={{ display: "flex", width: "50%", justifyContent: "space-between", margin: "2.5px 0 0 20px" }}
									key={key}>
									{createField(<b>{key}: </b>, Input, "contacts." + key, "text", key,[])}
								</div>
							)
						})}
					{props.error && <div className={s.errorServer}>{props.error}</div>}
					<button style={{ alignSelf: "self-start", padding: "10px", width: "30%", marginTop: "10px" }}>
						submit profile data
					</button>
				</div>
			</form>
		</div>
	)
}

export const ProfileFormData = reduxForm<ProfileForm, OwnPropsType>({ form: "profile" })(_ProfileFormData)

type OwnPropsType = {
	profile: ProfileUser
}
export type ProfileForm = Omit<ProfileUser, "photos" | "userId">
