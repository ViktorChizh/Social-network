import s from "components/common/textareaWithButton/TextareaWithButton.module.css"
import { TextArea } from "components/common/validatedComponent/ValidatedComponent"
import React from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator } from "utils/validators/textAreaValidator"

type OwnPropsType = {
	buttonName: string
	placeholder: string
	name: string
}
export type TextForm = {
	addPost?: string
	addMessage?: string
	addDialog?: string
}
export type TextAreaProps = InjectedFormProps<TextForm, OwnPropsType> & OwnPropsType
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

export const TextareaWithButton = reduxForm<TextForm, OwnPropsType>({ form: "textArea" })(TextareaWithButton_)
