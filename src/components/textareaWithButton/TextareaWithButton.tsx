import React, { FC } from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import s from "./TextareaWithButton.module.css"

type OwnPropsType = {
	buttonName: string
	placeholder: string
	name: string
}
export type TextFormType = {
	addPost?: string
	addMessage?: string
	addDialog?: string
}
const TextareaWithButton_: FC<InjectedFormProps<TextFormType, OwnPropsType> & OwnPropsType> = (props) => {
	const { buttonName, placeholder, name, handleSubmit } = props

	return (
		<form onSubmit={handleSubmit} className={s.textareaButton}>
			<Field component={"textarea"} name={name} placeholder={placeholder} />
			<button> {buttonName} </button>
		</form>
	)
}

export const TextareaWithButton = reduxForm<TextFormType, OwnPropsType>({ form: "textArea" })(TextareaWithButton_)
