import React, { FC, memo, useEffect } from "react"
import s from "components/header/headerLoginBlock/HeaderLoginBlock.module.css"
import { NavLink } from "react-router-dom"
import { Preloader } from "components/preloader/Preloader"

type PropsType = {
	isAuth: boolean
	login: string | null
	ownUserAvatar: string | null
	onClickHandler: () => void
}

export const HeaderLoginBlock: FC<PropsType> = memo((props) => {
	// useEffect(() => {}, [props.login])
	return (
		<div className={s.loginBlock}>
			{props.isAuth ? (
				<div className={s.login}>
					<img src={props.ownUserAvatar || ""} alt="" className={s.loginImg} />
					<div>
						<p>{props.login}</p>
						<p onClick={props.onClickHandler} className={s.logout}>
							logout
						</p>
					</div>
				</div>
			) : (
				<NavLink to={"/login"}>
					<i>login</i>
				</NavLink>
			)}
		</div>
	)
})
