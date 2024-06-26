import React, { FC, memo } from "react"
import logo from "../../assets/logo.jpg"
import { HeaderLoginBlock } from "components/header/headerLoginBlock/HeaderLoginBlock"
import s from "./Header.module.css"

export type PropsType = {
	isLoggedIn: boolean
	login: string | null
	ownUserAvatar: string
	onClickHandler: () => void
}

export const Header: FC<PropsType> = memo((props) => {
	return (
		<header className={s.header}>
			<img src={logo} alt="logo" />
			<div className={s.lightgreenBlock}></div>
			<h1> Social Network </h1>
			<HeaderLoginBlock {...props} />
		</header>
	)
})
