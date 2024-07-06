import ava from "assets/avatar.webp"
import React, { ComponentType, PureComponent } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { StateRedux } from "redux/_Store-Redux"
import { getAuthUserData, logout } from "redux/AuthReducer"
import { idSelector, isLoggedInSelector, loginSelector, ownUserAvatarSelector } from "utils/selectors/selectors"
import { Header } from "./Header"

class HeaderAPIContainer extends PureComponent<HeaderAPIContainerPropsType> {
	componentDidMount() {
		if (this.props.login === null) {
			this.props.getAuthUserData()
		}
	}
	componentDidUpdate(prevProps: Readonly<HeaderAPIContainerPropsType>) {
		if (this.props.ownUserAvatar !== prevProps.ownUserAvatar) {
			this.props.getAuthUserData()
		}
	}
	render() {
		return (
			<Header
				login={this.props.login || ""}
				isLoggedIn={this.props.isLoggedIn}
				ownUserAvatar={this.props.ownUserAvatar || ava}
				onClickHandler={this.props.logout}
			/>
		)
	}
}

type mStPType = {
	isLoggedIn: boolean
	ownUserAvatar: string
	login: string
	userId: number | null
}
type mDtPType = {
	getAuthUserData: () => void
	logout: () => void
}
type HeaderAPIContainerPropsType = mStPType & mDtPType

const MapStateToProps = (state: StateRedux): mStPType => ({
	isLoggedIn: isLoggedInSelector(state),
	ownUserAvatar: ownUserAvatarSelector(state) || "",
	login: loginSelector(state) || "",
	userId: idSelector(state) || null,
})

export const HeaderContainer = compose<ComponentType>(
	connect<mStPType, mDtPType, unknown, StateRedux>(MapStateToProps, { getAuthUserData, logout }),
)(HeaderAPIContainer)
