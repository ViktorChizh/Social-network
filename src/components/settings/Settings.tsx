import React, { FC, useEffect } from "react"
import { Redirect } from "react-router-dom"
import s from "./Settings.module.css"
import { PageSizeSetting } from "../pageSizeSettings/PageSizeSetting"

type SettingsPropsType = {
	isAuth: boolean
	pageSize: number
	setPageSize: (pageSize: number) => void
}
export const Settings: FC<SettingsPropsType> = ({ isAuth, pageSize, setPageSize }) => {
	useEffect(() => {
		setTimeout(() => {
			document.title = "SocialNetwork - settings"
		}, 500)
	})
	if (!isAuth) return <Redirect to={"login"} />
	return (
		<div className={s.main}>
			<PageSizeSetting pageSize={pageSize} setPageSize={setPageSize} />
		</div>
	)
}
