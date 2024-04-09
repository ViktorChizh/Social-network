import React, { FC, useEffect } from "react"
import { ProfileUserType } from "redux/ProfileReducer"
import s from "./Profile.module.css"
import { ProfileInfo } from "./profileInfo/ProfileInfo"
import { MyPostsContainer } from "./myPosts/MyPostsContainer"

type PropsType = {
	profile: ProfileUserType | null
}
export const Profile: FC<PropsType> = (props) => {
	useEffect(() => {
		setTimeout(() => {
			document.title = "SocialNetwork - profile"
		}, 500)
	})
	return (
		<div className={s.main}>
			<ProfileInfo profile={props.profile} width={"100px"} height={"100px"} />
			<MyPostsContainer />
		</div>
	)
}
