import { UserType } from "api/API"
import React, { FC } from "react"
import { Paginator } from "../common/paginator/Paginator"
import { User } from "./user/User"

export const Users: FC<UsersPropsType> = (props) => {
	let { users, pageSize, currentPage, totalCount, buttonDisabled, onPageChanged, toggleFollowUser } = props
	document.title = "SocialNetwork - users"
	return (
		<>
			<Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
			{users.map((u) => (
				<User key={u.id} user={u} toggleFollowUser={toggleFollowUser} buttonDisabled={buttonDisabled} />
			))}
		</>
	)
}
//types
type UsersPropsType = {
	users: UserType[]
	pageSize: number
	currentPage: number
	totalCount: number
	buttonDisabled: number[]
	onPageChanged: (pageNumber: number) => void
	toggleFollowUser: (userId: number, followed: boolean) => void
}
