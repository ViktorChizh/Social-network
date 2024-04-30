import { TextArea } from "components/validatedComponent/ValidatedComponent"
import React from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "utils/validators/textAreaValidator"
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
export type TextAreaProps = InjectedFormProps<TextFormType, OwnPropsType> & OwnPropsType
const maxLength100 = maxLengthCreator(100)

const TextareaWithButton_ = (props: TextAreaProps) => {
	const { buttonName, placeholder, name, handleSubmit } = props
	return (
		<form onSubmit={handleSubmit} className={s.textareaButton}>
			<Field component={TextArea} name={name} placeholder={placeholder} validate={[maxLength100]} />
			<button> {buttonName} </button>
		</form>
	)
}

export const TextareaWithButton = reduxForm<TextFormType, OwnPropsType>({ form: "textArea" })(TextareaWithButton_)
