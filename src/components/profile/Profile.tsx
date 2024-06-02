import React, { FC } from "react"
import { ProfileUserType } from "redux/ProfileReducer"
import { MyPostsContainer } from "./myPosts/MyPostsContainer"
import s from "./Profile.module.css"
import { ProfileInfo } from "./profileInfo/ProfileInfo"

type PropsType = {
	profile: Partial<ProfileUserType> | null
	status: string
	isOwnStatus: boolean
	saveAvatar: (file: File) => void
	updateStatus: (status: string) => void
}
export const Profile: FC<PropsType> = (props) => {
	document.title = "SocialNetwork - profile"
	return (
		<div className={s.main}>
			<ProfileInfo
				saveAvatar={props.saveAvatar}
				profile={props.profile}
				updateStatus={props.updateStatus}
				status={props.status}
				isOwnStatus={props.isOwnStatus}
			/>
			<MyPostsContainer />
		</div>
	)
}
