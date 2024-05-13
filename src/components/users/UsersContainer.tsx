import { UserType } from "api/API"
import { withAuthRedirect } from "hoc/withAuthRedirect"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { followUser, getUsers, setCurrentPage, unFollowUser } from "redux/UsersReducer"
import { Preloader } from "../preloader/Preloader"
import { Users } from "./Users"
import s from "./Users.module.css"

class UsersAPIComponent extends Component<UsersAPIComponentPropsType> {
	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage)
	}

	onPageChanged(pageNumber: number) {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(this.props.pageSize, pageNumber)
	}

	render() {
		if (!this.props.isLoggedIn) return <Redirect to={"/login"} />
		return (
			<div className={s.users}>
				{this.props.isPreloading ? (
					<Preloader style={{ width: "53%", height: "100%" }} />
				) : (
					<Users
						users={this.props.users}
						followUser={this.props.followUser}
						unFollowUser={this.props.unFollowUser}
						totalCount={this.props.totalCount}
						currentPage={this.props.currentPage}
						pageSize={this.props.pageSize}
						onPageChanged={this.onPageChanged.bind(this)}
						buttonDisabled={this.props.buttonDisabled}
					/>
				)}
			</div>
		)
	}
}
const mapStateToProps = (state: StateReduxType): mStPType => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	currentPage: state.usersPage.currentPage,
	totalCount: state.usersPage.totalCount,
	isPreloading: state.usersPage.isPreloading,
	buttonDisabled: state.usersPage.buttonDisabled,
	isLoggedIn: state.auth.isLoggedIn,
})
export const UsersContainer = compose<ComponentType>(
	withAuthRedirect,
	connect(mapStateToProps, { setCurrentPage, followUser, unFollowUser, getUsers }),
)(UsersAPIComponent)
//types
type mStPType = {
	users: UserType[]
	pageSize: number
	currentPage: number
	totalCount: number
	isPreloading: boolean
	buttonDisabled: number[]
	isLoggedIn: boolean
}
type mDtPType = {
	setCurrentPage: (currentPage: number) => void
	followUser: (userId: number) => void
	unFollowUser: (userId: number) => void
	getUsers: (pageSize: number, currentPage: number) => void
}
type UsersAPIComponentPropsType = mStPType & mDtPType
