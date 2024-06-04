import classNames from "classnames"
import React from "react"
import s from "components/common/validatedComponent/validatedComponent.module.css"

const ValidatedComponent = ({ input, meta, ...props }: any) => {
	return (
		<div className={s.container}>
			<div className={classNames(s.formControl, meta.touched && meta.error ? s.errorElement : "")}>
				{props.children}
			</div>
			{meta.touched && meta.error && <span className={s.errorSpan}>{meta.error}</span>}
		</div>
	)
}

export const TextArea = (props: any) => {
	return (
		<ValidatedComponent {...props}>
			<textarea {...props.input} {...props} />
		</ValidatedComponent>
	)
}

export const Input = (props: any) => {
	return (
		<ValidatedComponent {...props}>
			<input {...props.input} {...props} autoComplete={""} />
		</ValidatedComponent>
	)
}
