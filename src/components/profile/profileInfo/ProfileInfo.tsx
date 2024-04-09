import React, { FC } from "react"
import { ProfileUserType } from "redux/ProfileReducer"
import s from "../Profile.module.css"
import { Preloader } from "../../preloader/Preloader"
import ava from "assets/avatar.webp"

type PropsType = {
	profile: ProfileUserType | null
	width: string
	height: string
}
export const ProfileInfo: FC<PropsType> = ({ profile, height, width }) => {
	return (
		<>
			{profile ? (
				<div className={s.description}>
					<img
						className={s.avatarImg}
						src={profile.photos.small || ava}
						alt={"UserAvatar"}
						width={width}
						height={height}
					/>
					<span>{profile.fullName}</span>
				</div>
			) : (
				<Preloader style={{ width: "25%", height: "25%" }} />
			)}
		</>
	)
}
