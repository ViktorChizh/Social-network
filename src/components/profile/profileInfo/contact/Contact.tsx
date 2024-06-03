import React from "react"

type Props = { title: string; value: string }
export const Contact = ({ title, value }: Props) => {
	return (
		<div style={{ marginLeft: "20px" }}>
			<b>{title}: </b> {value ? value : "---"}
		</div>
	)
}
