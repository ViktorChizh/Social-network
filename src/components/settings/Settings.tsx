import React, { FC } from "react"
import { Redirect } from "react-router-dom"
import { PageSizeSetting } from "../pageSizeSettings/PageSizeSetting"
import s from "./Settings.module.css"

type SettingsPropsType = {
	isLoggedIn: boolean
	pageSize: number
	setPageSize: (pageSize: number) => void
}
export const Settings: FC<SettingsPropsType> = ({ isLoggedIn, pageSize, setPageSize }) => {
	document.title = "SocialNetwork - settings"
	if (!isLoggedIn) return <Redirect to={"/login"} />
	return (
		<div className={s.main}>
			<PageSizeSetting pageSize={pageSize} setPageSize={setPageSize} />
		</div>
	)
}
