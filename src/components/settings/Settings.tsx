import React, { FC } from "react"
import { PageSizeSetting } from "../pageSizeSettings/PageSizeSetting"
import s from "./Settings.module.css"

type SettingsPropsType = {
	pageSize: number
	setPageSize: (pageSize: number) => void
}
export const Settings: FC<SettingsPropsType> = ({ pageSize, setPageSize }) => {
	document.title = "SocialNetwork - settings"
	return (
		<div className={s.main}>
			<PageSizeSetting pageSize={pageSize} setPageSize={setPageSize} />
		</div>
	)
}
