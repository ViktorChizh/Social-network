import React, { ComponentType, PureComponent } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { getAuthUserData, logout } from "redux/AuthReducer"
import { isLoggedInSelector, loginSelector, ownUserAvatarSelector } from "utils/selectors/selectors"
import { Header } from "./Header"

class HeaderAPIContainer extends PureComponent<HeaderAPIContainerPropsType> {
	componentDidMount() {
		if (this.props.login === null) {
			this.props.getAuthUserData()
		}
	}
	render() {
		return (
			<Header
				login={this.props.login}
				isLoggedIn={this.props.isLoggedIn}
				ownUserAvatar={this.props.ownUserAvatar}
				onClickHandler={this.props.logout}
			/>
		)
	}
}

type mStPType = {
	isLoggedIn: boolean
	login: string | null
	ownUserAvatar: string | null
}
type mDtPType = {
	getAuthUserData: () => void
	logout: () => void
}
type HeaderAPIContainerPropsType = mStPType & mDtPType

const MapStateToProps = (state: StateReduxType): mStPType => ({
	isLoggedIn: isLoggedInSelector(state),
	login: loginSelector(state),
	ownUserAvatar: ownUserAvatarSelector(state),
})

export const HeaderContainer = compose<ComponentType>(
	connect<mStPType, mDtPType, unknown, StateReduxType>(MapStateToProps, { getAuthUserData, logout }),
)(HeaderAPIContainer)
