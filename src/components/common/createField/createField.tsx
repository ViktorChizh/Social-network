import React, { ReactNode } from "react"
import { Field } from "redux-form"

// make function (not component) in educational reasons
export const createField = (
	textStart: ReactNode | string,
	component: ReactNode | string,
	name: string,
	type: string,
	placeholder: string,
	validate: any[],
	textEnd?: ReactNode | string,
) => {
	return (
		<div style={{ display: "flex", gap: "10px" }}>
			{textStart}
			<Field component={component} name={name} type={type} placeholder={placeholder} validate={validate}/>
			{textEnd}
		</div>
	)
}
