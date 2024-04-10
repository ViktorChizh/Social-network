import React, { FC, useEffect } from "react"
import { ProfileUserType } from "redux/ProfileReducer"
import s from "./Profile.module.css"
import { ProfileInfo } from "./profileInfo/ProfileInfo"
import { MyPostsContainer } from "./myPosts/MyPostsContainer"

type PropsType = {
	profile: ProfileUserType | null
	status: string
	isOwnStatus: boolean
	updateStatus: (status: string) => void
}
export const Profile: FC<PropsType> = (props) => {
	useEffect(() => {
		setTimeout(() => {
			document.title = "SocialNetwork - profile"
		}, 500)
	})
	return (
		<div className={s.main}>
			<ProfileInfo
				profile={props.profile}
				updateStatus={props.updateStatus}
				status={props.status}
				isOwnStatus={props.isOwnStatus}
			/>
			<MyPostsContainer />
		</div>
	)
}
