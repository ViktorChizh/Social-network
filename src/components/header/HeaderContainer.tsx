import React, { ComponentType, PureComponent } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { getAuthUserData } from "redux/AuthReducer"
import { Header } from "./Header"

class HeaderAPIContainer extends PureComponent<HeaderAPIContainerPropsType> {
	componentDidMount() {
		if (this.props.login === null) {
			this.props.getAuthUserData()
		}
	}

	render() {
		return <Header login={this.props.login} isAuth={this.props.isAuth} ownUserAvatar={this.props.ownUserAvatar} />
	}
}

type mStPType = {
	isAuth: boolean
	login: string | null
	ownUserAvatar: string | null
}
type mDtPType = {
	getAuthUserData: () => void
}
type HeaderAPIContainerPropsType = mStPType & mDtPType

const MapStateToProps = (state: StateReduxType): mStPType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	ownUserAvatar: state.auth.ownUserAvatar,
})

export const HeaderContainer = compose<ComponentType>(
	connect<mStPType, mDtPType, unknown, StateReduxType>(MapStateToProps, { getAuthUserData }),
)(HeaderAPIContainer)
