import React, { ReactNode } from "react"
import { Field } from "redux-form"

// make function (not component) in educational reasons
export const createField = (
	component: ReactNode | string,
	name: string,
	type: string,
	placeholder?: string,
	validate?: any[],
	text: ReactNode | string = "",
) => {
	return (
		<div>
			<Field component={component} name={name} type={type} placeholder={placeholder} validate={validate} /> {text}
		</div>
	)
}
