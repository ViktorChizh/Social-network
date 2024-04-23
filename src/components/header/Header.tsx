import React, { FC, memo } from "react"
import logo from "../../assets/logo.jpg"
import { HeaderLoginBlock } from "components/header/headerLoginBlock/HeaderLoginBlock"
import s from "./Header.module.css"

export type PropsType = {
	isAuth: boolean
	login: string | null
	ownUserAvatar: string | null
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
