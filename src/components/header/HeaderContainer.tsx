import ava from "assets/avatar.webp"
import React, { ComponentType, PureComponent } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { getAuthUserData, logout } from "redux/AuthReducer"
import { getProfile, ProfileUserType } from "redux/ProfileReducer"
import { isLoggedInSelector, profileSelector } from "utils/selectors/selectors"
import { Header } from "./Header"

class HeaderAPIContainer extends PureComponent<HeaderAPIContainerPropsType> {
	componentDidMount() {
		if (this.props.profile?.fullName === null) {
			this.props.getAuthUserData()
		}
	}
	componentDidUpdate(prevProps: Readonly<HeaderAPIContainerPropsType>) {
		if (this.props.profile?.photos?.small !== prevProps.profile?.photos?.small) {
			this.props.getProfile(this.props.profile?.userId?.toString() || "")
		}
	}
	render() {
		return (
			<Header
				login={this.props.profile?.fullName || ""}
				isLoggedIn={this.props.isLoggedIn}
				ownUserAvatar={this.props.profile?.photos?.small || ava}
				onClickHandler={this.props.logout}
			/>
		)
	}
}

type mStPType = {
	isLoggedIn: boolean
	profile: Partial<ProfileUserType> | null
}
type mDtPType = {
	getProfile: (userId: string) => void
	getAuthUserData: () => void
	logout: () => void
}
type HeaderAPIContainerPropsType = mStPType & mDtPType

const MapStateToProps = (state: StateReduxType): mStPType => ({
	isLoggedIn: isLoggedInSelector(state),
	profile: profileSelector(state),
})

export const HeaderContainer = compose<ComponentType>(
	connect<mStPType, mDtPType, unknown, StateReduxType>(MapStateToProps, { getAuthUserData, logout, getProfile }),
)(HeaderAPIContainer)
