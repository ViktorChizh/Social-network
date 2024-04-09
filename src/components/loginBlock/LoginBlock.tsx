import React, { FC, memo, useEffect } from "react"
import s from "./LoginBlock.module.css"
import { NavLink } from "react-router-dom"
import { Preloader } from "../preloader/Preloader"

type PropsType = {
	isAuth: boolean
	login: string | null
	ownUserAvatar: string | null
}

export const LoginBlock: FC<PropsType> = memo((props) => {
	useEffect(() => {}, [props.login])
	return (
		<div className={s.loginBlock}>
			{props.isAuth ? (
				<div className={s.login}>
					<img src={props.ownUserAvatar || ""} alt="" className={s.loginImg} />
					<p>{props.login}</p>
				</div>
			) : (
				<NavLink to={"/login"}>
					<i>login</i>
				</NavLink>
			)}
		</div>
	)
})
