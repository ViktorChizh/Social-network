import { ProfileForm } from "components/profile/profileInfo/profileFormData/ProfileFormData"
import React, { Component, ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"
import { StateRedux } from "redux/_Store-Redux"
import { getAuthUserData } from "redux/AuthReducer"
import {
	getProfile,
	getStatus,
	ProfileUser,
	saveAvatar,
	updateProfuleData,
	updateStatus,
} from "redux/ProfileReducer"
import { withAuthRedirect } from "utils/hoc/withAuthRedirect"
import {
	idSelector,
	isErrorSelector,
	isLoggedInSelector,
	profileSelector,
	statusSelector,
} from "utils/selectors/selectors"
import { Profile } from "./Profile"

class ProfileAPIComponent extends Component<ProfileCotainer> {
	state = {
		isOwnStatus: true,
	}
	refreshProfile() {
		if (this.props.id) {
			this.props.getProfile(this.props.match.params.userId || this.props.id?.toString())
			this.props.getStatus(this.props.match.params.userId || this.props.id?.toString())
			this.props.getAuthUserData()
			this.setState({ isOwnStatus: true })
		}

		if (this.props.match.params.userId && this.props.match.params.userId !== this.props.id?.toString()) {
			this.setState({ isOwnStatus: false })
		}
	}
	componentDidMount() {
		this.refreshProfile()
	}
	componentDidUpdate(prevProps: Readonly<ProfileCotainer>) {
		if (
			this.props.id !== prevProps.id ||
			this.props.status !== prevProps.status ||
			this.props.match.params.userId !== prevProps.match.params.userId ||
			this.props.profile.fullName !== prevProps.profile.fullName ||
			this.props.profile.lookingForAJob !== prevProps.profile.lookingForAJob ||
			this.props.profile.photos?.small !== prevProps.profile.photos?.small ||
			this.props.profile.aboutMe !== prevProps.profile.aboutMe ||
			this.props.profile.contacts?.facebook !== prevProps.profile.contacts?.facebook ||
			this.props.profile.contacts?.vk !== prevProps.profile.contacts?.vk ||
			this.props.profile.contacts?.github !== prevProps.profile.contacts?.github ||
			this.props.profile.contacts?.twitter !== prevProps.profile.contacts?.twitter ||
			this.props.profile.contacts?.instagram !== prevProps.profile.contacts?.instagram ||
			this.props.profile.contacts?.mainLink !== prevProps.profile.contacts?.mainLink ||
			this.props.profile.contacts?.website !== prevProps.profile.contacts?.website ||
			this.props.profile.contacts?.youtub !== prevProps.profile.contacts?.youtub
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
				updateProfuleData={this.props.updateProfuleData}
				saveAvatar={this.changeAvatar}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				isOwnStatus={this.state.isOwnStatus}
				isError={this.props.isError}
			/>
		)
	}
}

const mapStateToProps = (state: StateRedux): MStP => ({
	isLoggedIn: isLoggedInSelector(state),
	profile: profileSelector(state),
	status: statusSelector(state),
	id: idSelector(state),
	isError: isErrorSelector(state),
})
type MStP = {
	isLoggedIn: boolean
	profile: ProfileUser
	status: string
	id: number | null
	isError: boolean
}
type MDtP = {
	getProfile: (userId: string) => void
	getStatus: (userId: string) => void
	updateStatus: (status: string) => void
	updateProfuleData: (formdata: ProfileForm) => void
	getAuthUserData: () => void
	saveAvatar: (file: File, userId: number) => void
}
type ProfileCotainer = MStP & MDtP & RouteComponentProps<{ userId?: string }>

export const ProfileContainer = compose<ComponentType>(
	withAuthRedirect,
	withRouter,
	connect(mapStateToProps, { getProfile, getStatus, updateStatus, updateProfuleData, saveAvatar, getAuthUserData }),
)(ProfileAPIComponent)
