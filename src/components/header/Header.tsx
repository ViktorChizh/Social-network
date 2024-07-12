import {HeaderLoginBlock} from 'components/header/headerLoginBlock/HeaderLoginBlock'
import React, {memo} from 'react'
import logo from '../../assets/logo.jpg'
import s from './Header.module.css'

export type Props = {
	isLoggedIn: boolean
	login: string | null
	ownUserAvatar: string
	onClickHandler: () => void
}

export const Header = memo((props:Props) => {
	return (
		<header className={s.header}>
			<img src={logo} alt="logo" />
			<div className={s.lightgreenBlock}></div>
			<h1> Social Network </h1>
			<HeaderLoginBlock {...props} />
		</header>
	)
})
