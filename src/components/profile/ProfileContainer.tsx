import { wihAuthRedirect } from "hoc/wihAuthRedirect"
import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom"
import { StateReduxType } from "redux/_Store-Redux"
import { getProfile, ResponseUserProfileType } from "redux/ProfileReducer"
import { Profile } from "./Profile"

class ProfileAPIComponent extends Component<WithRouterProfileComponentType> {
	componentDidMount() {
		this.props.getProfile(this.props.match.params.userId || "29529")
	}

	render() {
		return <Profile profile={this.props.profile} />
	}
}

const mapStateToProps = (state: StateReduxType): MStPType => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth,
})
type MStPType = {
	profile: ResponseUserProfileType | null
	isAuth: boolean
}
type MDtPType = {
	getProfile: (userId: string) => void
}

type WithRouterProfileComponentType = MStPType & MDtPType & RouteComponentProps<{ userId?: string }>

export const ProfileContainer = connect(mapStateToProps, { getProfile })(withRouter(ProfileAPIComponent))
