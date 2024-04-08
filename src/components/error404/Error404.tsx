import React, { useEffect } from "react"
import s from "./Error.module.css"

export const Error404 = () => {
	useEffect(() => {
		setTimeout(() => {
			document.title = "SocialNetwork - error404"
		}, 500)
	})
	return <div className={s.main} />
}
