import { ProfileFormType } from "components/profile/profileInfo/profileFormData/ProfileFormData"
import React, { FC } from "react"
import { ProfileUserType } from "redux/ProfileReducer"
import { MyPostsContainer } from "./myPosts/MyPostsContainer"
import s from "./Profile.module.css"
import { ProfileInfo } from "./profileInfo/ProfileInfo"

type PropsType = {
	profile: ProfileUserType
	status: string
	isOwnStatus: boolean
	isError: boolean
	saveAvatar: (file: File) => void
	updateStatus: (status: string) => void
	updateProfuleData: (formdata: ProfileFormType) => void
}
export const Profile: FC<PropsType> = (props) => {
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
