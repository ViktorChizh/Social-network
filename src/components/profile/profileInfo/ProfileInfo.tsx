import { ProfileStatus } from "components/profile/profileStatus/ProfileStatus"
import React, { FC } from "react"
import { ProfileUserType } from "redux/ProfileReducer"
import s from "../Profile.module.css"
import { Preloader } from "../../common/preloader/Preloader"
import ava from "assets/avatar.webp"

type PropsType = {
	profile: ProfileUserType | null
	status: string
	isOwnStatus: boolean
	updateStatus: (status: string) => void
}
export const ProfileInfo: FC<PropsType> = ({ profile, status, isOwnStatus, updateStatus }) => {
	return (
		<>
			{profile ? (
				<div className={s.description}>
					<img className={s.avatarImg} src={profile.photos.small || ava} alt={"UserAvatar"} />
					<div className={s.textBlock}>
						<span>{profile.fullName}</span>
						<ProfileStatus status={status} updateStatus={updateStatus} isOwnStatus={isOwnStatus} />
					</div>
				</div>
			) : (
				<Preloader style={{ width: "25%", height: "25%" }} />
			)}
		</>
	)
}
