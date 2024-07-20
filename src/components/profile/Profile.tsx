import {ProfileForm} from 'components/profile/profileInfo/profileFormData/ProfileFormData'
import React from 'react'
import {ProfileUser} from 'redux/ProfileReducer'
import {MyPostsContainer} from './myPosts/MyPostsContainer'
import s from './Profile.module.css'
import {ProfileInfo} from './profileInfo/ProfileInfo'

type Props = {
	profile: ProfileUser
	status: string
	isOwnStatus: boolean
	isError: boolean
	saveAvatar: (file: File) => void
	updateStatus: (status: string) => void
	updateProfuleData: (formdata: ProfileForm) => void
}
export const Profile = (props:Props) => {
	document.title = "SocialNetwork - profile"
	return (
		<div className={s.main}>
			<ProfileInfo
				saveAvatar={props.saveAvatar}
				profile={props.profile}
				updateProfuleData={props.updateProfuleData}
				updateStatus={props.updateStatus}
				status={props.status}
				isOwnStatus={props.isOwnStatus}
				isError={props.isError}
			/>
			<MyPostsContainer />
		</div>
	)
}
