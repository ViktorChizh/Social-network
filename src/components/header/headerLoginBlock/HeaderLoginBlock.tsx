import s from 'components/header/headerLoginBlock/HeaderLoginBlock.module.css'
import React, {memo} from 'react'

type Props = {
	isLoggedIn: boolean
	login: string | null
	ownUserAvatar: string
	onClickHandler: () => void
}

export const HeaderLoginBlock = memo(({isLoggedIn, login, ownUserAvatar, onClickHandler}:Props) => {
	return (
		<div className={s.loginBlock}>
			{isLoggedIn && (
				<div className={s.login}>
					<img src={ownUserAvatar} alt="" className={s.loginImg} />
					<div>
						<p>{login}</p>
						<p onClick={onClickHandler} className={s.logout}>
							logout
						</p>
					</div>
				</div>
			)}
		</div>
	)
})
