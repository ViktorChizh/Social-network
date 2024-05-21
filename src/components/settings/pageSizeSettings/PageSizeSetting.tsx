import React, { FC } from "react"
import s from "components/settings/pageSizeSettings/PageSizeSetting.module.css"

type PageSizeSettingPropsType = {
	pageSize: number
	setPageSize: (pageSize: number) => void
}
export const PageSizeSetting: FC<PageSizeSettingPropsType> = ({ pageSize, setPageSize }) => {
	return (
		<div className={s.settings}>
			<span>Number of users on the page (from 1 to 10): </span>
			<button onClick={() => setPageSize(pageSize - 1 <= 1 ? 1 : pageSize - 1)}>-1</button>
			{pageSize}
			<button onClick={() => setPageSize(pageSize + 1 >= 10 ? 10 : pageSize + 1)}>+1</button>
		</div>
	)
}
