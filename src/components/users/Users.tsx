import React, { FC } from "react"
import { Paginator } from "../paginator/Paginator"
import { User } from "./user/User"
import { UserType } from "redux/UsersReducer"

export const Users: FC<UsersPropsType> = (props) => {
	let { users, pageSize, currentPage, totalCount, buttonDisabled, onPageChanged, followUser, unFollowUser } = props
	return (
		<>
			<Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
			{users.map((u) => (
				<User key={u.id} user={u} followUser={followUser} unFollowUser={unFollowUser} buttonDisabled={buttonDisabled} />
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
	followUser: (userId: number) => void
	unFollowUser: (userId: number) => void
}
