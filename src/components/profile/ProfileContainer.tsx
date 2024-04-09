import { withAuthRedirect } from "hoc/withAuthRedirect"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { getProfile, ProfileUserType } from "redux/ProfileReducer"
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
})
type MStPType = {
	profile: ProfileUserType | null
}
type MDtPType = {
	getProfile: (userId: string) => void
}

type WithRouterProfileComponentType = MStPType & MDtPType & RouteComponentProps<{ userId?: string }>

export const ProfileContainer = compose<ComponentType>(
	withAuthRedirect,
	withRouter,
	connect(mapStateToProps, { getProfile }),
)(ProfileAPIComponent)
