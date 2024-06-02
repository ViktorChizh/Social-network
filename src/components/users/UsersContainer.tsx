import { UserType } from "api/API"
import { withAuthRedirect } from "utils/hoc/withAuthRedirect"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { toggleFollowUser, getUsers, setCurrentPage } from "redux/UsersReducer"
import {
	buttonDisabledSelector,
	currentPageSelector,
	isLoggedInSelector,
	isPreloadingSelector,
	pageSizeSelector,
	totalCountSelector,
	usersSelector,
} from "utils/selectors/selectors"
import { Preloader } from "../common/preloader/Preloader"
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
						toggleFollowUser={this.props.toggleFollowUser}
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
	users: usersSelector(state),
	pageSize: pageSizeSelector(state),
	currentPage: currentPageSelector(state),
	totalCount: totalCountSelector(state),
	isPreloading: isPreloadingSelector(state),
	buttonDisabled: buttonDisabledSelector(state),
	isLoggedIn: isLoggedInSelector(state),
})
const UsersContainer = compose<ComponentType>(
	withAuthRedirect,
	connect(mapStateToProps, { setCurrentPage, toggleFollowUser, getUsers }),
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
	toggleFollowUser: (userId: number, followed: boolean) => void
	getUsers: (pageSize: number, currentPage: number) => void
}
type UsersAPIComponentPropsType = mStPType & mDtPType

export default UsersContainer
