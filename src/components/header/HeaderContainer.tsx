import React, { PureComponent } from "react"
import { Header } from "./Header"
import { AuthType, setAuthUserData } from "redux/AuthReducer"
import { connect } from "react-redux"
import { StateReduxType } from "redux/_Store-Redux"
import { api } from "api/API"

class HeaderAPIContainer extends PureComponent<HeaderAPIContainerPropsType> {
	componentDidMount() {
		if (this.props.login === null) {
			api.getMe().then((res) => {
				if (res.resultCode === 0) {
					let authData = res.data
					api.getProfile(res.data.id).then((data) => {
						this.props.setAuthUserData(authData, data.photos.small)
					})
				}
			})
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
	setAuthUserData: (data: AuthType, ownUserAvatar: string | null) => void
}
type HeaderAPIContainerPropsType = mStPType & mDtPType

const MapStateToProps = (state: StateReduxType): mStPType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	ownUserAvatar: state.auth.ownUserAvatar,
})

export const HeaderContainer = connect<mStPType, mDtPType, unknown, StateReduxType>(MapStateToProps, {
	setAuthUserData,
})(HeaderAPIContainer)

export type ResponseServerType<D = {}> = {
	data: D
	resultCode: 0 | 1 | 10
	messages: string[]
}
