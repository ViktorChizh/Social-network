import React, { FC } from "react"
import { Paginator } from "../paginator/Paginator"
import { User } from "./user/User"
import { UserType } from "../../redux/UsersReducer"

export const Users: FC<UsersPropsType> = (props) => {
	let { users, pageSize, currentPage, totalCount, onPageChanged, follow, unFollow, setButtonDisabled, buttonDisabled } =
		props
	return (
		<>
			<Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
			{users.map((u) => (
				<User
					key={u.id}
					user={u}
					follow={follow}
					unFollow={unFollow}
					buttonDisabled={buttonDisabled}
					setButtonDisabled={setButtonDisabled}
				/>
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
	onPageChanged: (pageNumber: number) => void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setButtonDisabled: (isDisabled: boolean, id: number) => void
	buttonDisabled: number[]
}
