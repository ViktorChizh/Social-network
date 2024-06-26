import s from "components/header/headerLoginBlock/HeaderLoginBlock.module.css"
import React, { FC, memo } from "react"

type PropsType = {
	isLoggedIn: boolean
	login: string | null
	ownUserAvatar: string
	onClickHandler: () => void
}

export const HeaderLoginBlock: FC<PropsType> = memo((props) => {
	return (
		<div className={s.loginBlock}>
			{props.isLoggedIn && (
				<div className={s.login}>
					<img src={props.ownUserAvatar} alt="" className={s.loginImg} />
					<div>
						<p>{props.login}</p>
						<p onClick={props.onClickHandler} className={s.logout}>
							logout
						</p>
					</div>
				</div>
			)}
		</div>
	)
})
