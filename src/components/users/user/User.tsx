import {UserType} from 'api/API'
import React from 'react'
import {NavLink} from 'react-router-dom'
import ava from '../../../assets/avatar.webp'
import s from '../Users.module.css'

export const User = ({ user, toggleFollowUser, buttonDisabled }: UserProps) => {
	return (
		<div className={s.block} key={user.id}>
			<div className={s.blockImg}>
				<NavLink to={`/profile/${user.id}`}>
					<img src={user.photos.small ? user.photos.small : ava} width="50px" height="50px" alt="avatar" />
				</NavLink>
				{user.followed ? (
					<button
						disabled={buttonDisabled.some((id) => id === user.id)}
						style={{ opacity: buttonDisabled.some((id) => id === user.id) ? "0.3" : "1" }}
						onClick={() => toggleFollowUser(user.id, false)}>
						FOLLOW
					</button>
				) : (
					<button
						disabled={buttonDisabled.some((id) => id === user.id)}
						style={{ opacity: buttonDisabled.some((id) => id === user.id) ? "0.3" : "1" }}
						onClick={() => toggleFollowUser(user.id, true)}>
						UNFOLLOW
					</button>
				)}
			</div>
			<div className={s.blockMain}>
				<NavLink to={`/profile/${user.id}`}>
					<span>{user.name}</span>
				</NavLink>
				<span className={s.status}>{user.status}</span>
			</div>
		</div>
	)
}
//types
type UserProps = {
	user: UserType
	buttonDisabled: number[]
	toggleFollowUser: (userId: number, followed: boolean) => void
}
