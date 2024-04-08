import React, { FC, useEffect } from "react"
import s from "./Profile.module.css"
import { ProfileInfo } from "./profileInfo/ProfileInfo"
import { MyPostsContainer } from "./myPosts/MyPostsContainer"
import { ResponseUserProfileType } from "../../redux/ProfileReducer"

type PropsType = {
	profile: ResponseUserProfileType | null
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
