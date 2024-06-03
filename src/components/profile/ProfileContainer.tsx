import { withAuthRedirect } from "utils/hoc/withAuthRedirect"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { getProfile, getStatus, ProfileUserType, saveAvatar, updateStatus } from "redux/ProfileReducer"
import { idSelector, isLoggedInSelector, profileSelector, statusSelector } from "utils/selectors/selectors"
import { Profile } from "./Profile"

class ProfileAPIComponent extends Component<WithRouterProfileComponentType> {
	state = {
		isOwnStatus: true,
	}
	refreshProfile() {
		if (this.props.id) {
			this.props.getProfile(this.props.match.params.userId || this.props.id?.toString())
			this.props.getStatus(this.props.match.params.userId || this.props.id?.toString())
			this.setState({ isOwnStatus: true })
		}
		if (this.props.match.params.userId && this.props.match.params.userId !== this.props.id?.toString()) {
			this.setState({ isOwnStatus: false })
		}
	}
	componentDidMount() {
		this.refreshProfile()
	}
	componentDidUpdate(prevProps: Readonly<WithRouterProfileComponentType>) {
		if (
			this.props.match.params.userId !== prevProps.match.params.userId ||
			this.props.profile?.photos?.small !== prevProps.profile?.photos?.small
		) {
			this.refreshProfile()
		}
	}

	changeAvatar = (file: File) => {
		this.props.saveAvatar(file, Number(this.props.match.params.userId))
	}
	render() {
		if (!this.props.isLoggedIn) return <Redirect to={"/login"} />
		return (
			<Profile
				saveAvatar={this.changeAvatar}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				isOwnStatus={this.state.isOwnStatus}
			/>
		)
	}
}

const mapStateToProps = (state: StateReduxType): MStPType => ({
	isLoggedIn: isLoggedInSelector(state),
	profile: profileSelector(state),
	status: statusSelector(state),
	id: idSelector(state),
})
type MStPType = {
	isLoggedIn: boolean
	profile: ProfileUserType
	status: string
	id: number | null
}
type MDtPType = {
	getProfile: (userId: string) => void
	getStatus: (userId: string) => void
	updateStatus: (status: string) => void
	saveAvatar: (file: File, userId: number) => void
}
type WithRouterProfileComponentType = MStPType & MDtPType & RouteComponentProps<{ userId?: string }>

export const ProfileContainer = compose<ComponentType>(
	withAuthRedirect,
	withRouter,
	connect(mapStateToProps, { getProfile, getStatus, updateStatus, saveAvatar }),
)(ProfileAPIComponent)
