import React, { FC, memo } from "react"
import logo from "../../assets/logo.jpg"
import { LoginBlock } from "../loginBlock/LoginBlock"
import s from "./Header.module.css"

export type PropsType = {
	isAuth: boolean
	login: string | null
	ownUserAvatar: string | null
}

export const Header: FC<PropsType> = memo((props) => {
	return (
		<header className={s.header}>
			<img src={logo} alt="logo" />
			<div className={s.lightgreenBlock}></div>
			<h1> Social Network </h1>
			<LoginBlock {...props} />
		</header>
	)
})
