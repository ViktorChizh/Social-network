import React, { FC, memo } from "react"
import s from "./Header.module.css"
import logo from "../../assets/logo.jpg"
import { AuthType } from "redux/AuthReducer"
import { LoginBlock } from "../loginBlock/LoginBlock"

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
