import {User} from 'api/API'
import React from 'react'
import {Paginator} from '../common/paginator/Paginator'
import {UserItem} from 'components/users/userItem/UserItem'

export const Users = (props: UsersProps) => {
	let { users, pageSize, currentPage, totalCount, buttonDisabled, onPageChanged, toggleFollowUser } = props
	document.title = "SocialNetwork - users"
	return (
		<>
			<Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
			{users.map((u) => (
				<UserItem key={u.id} user={u} toggleFollowUser={toggleFollowUser} buttonDisabled={buttonDisabled} />
			))}
		</>
	)
}
//types
type UsersProps = {
	users: User[]
	pageSize: number
	currentPage: number
	totalCount: number
	buttonDisabled: number[]
	onPageChanged: (pageNumber: number) => void
	toggleFollowUser: (userId: number, followed: boolean) => void
}
