import { withAuthRedirect } from "hoc/withAuthRedirect"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { getProfile, getStatus, ProfileUserType, updateStatus } from "redux/ProfileReducer"
import { Profile } from "./Profile"

class ProfileAPIComponent extends Component<WithRouterProfileComponentType> {
	state = {
		isOwnStatus: true,
	}
	componentDidMount() {
		if (this.props.match.params.userId === "29529") {
			//не хочу менять статус, если зашел через общий аккаунт
			this.setState({ isOwnStatus: true })
		} else {
			this.setState({ isOwnStatus: false })
		}
		if (this.props.id) {
			this.props.getProfile(this.props.match.params.userId || this.props.id?.toString())
			this.props.getStatus(this.props.match.params.userId || this.props.id?.toString())
		}
	}
	render() {
		if (!this.props.isLoggedIn) return <Redirect to={"/login"} />
		return (
			<Profile
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				isOwnStatus={this.state.isOwnStatus}
			/>
		)
	}
}

const mapStateToProps = (state: StateReduxType): MStPType => ({
	isLoggedIn: state.auth.isLoggedIn,
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	id: state.auth.id,
})
type MStPType = {
	isLoggedIn: boolean
	profile: ProfileUserType | null
	status: string
	id: number | null
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
