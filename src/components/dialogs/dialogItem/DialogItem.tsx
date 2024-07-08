import React from "react"
import s from "../Dialogs.module.css"
import { NavLink } from "react-router-dom"

export type DialogItemProps = {
	id: number
	name: string
}

export const DialogItem = ({ id, name }: DialogItemProps) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + id} activeClassName={s.active}>
				{name}
			</NavLink>
		</div>
	)
}
