import { withAuthRedirect } from "hoc/withAuthRedirect"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { getProfile, getStatus, ProfileUserType, updateStatus } from "redux/ProfileReducer"
import { Profile } from "./Profile"

class ProfileAPIComponent extends Component<WithRouterProfileComponentType> {
	componentDidMount() {
		this.props.getProfile(this.props.match.params.userId || "29529")
		this.props.getStatus(this.props.match.params.userId || "29529")
	}

	render() {
		return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
	}
}

const mapStateToProps = (state: StateReduxType): MStPType => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
})
type MStPType = {
	profile: ProfileUserType | null
	status: string
}
type MDtPType = {
	getProfile: (userId: string) => void
	getStatus: (userId: string) => void
	updateStatus: (status: string) => void
}

type WithRouterProfileComponentType = MStPType & MDtPType & RouteComponentProps<{ userId?: string }>

export const ProfileContainer = compose<ComponentType>(
	withAuthRedirect,
	withRouter,
	connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
)(ProfileAPIComponent)
