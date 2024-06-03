import ava from "assets/avatar.webp"
import { ProfileData } from "components/profile/profileInfo/profileData/ProfileData"
import { ProfileStatus } from "components/profile/profileStatus/ProfileStatus"
import React, { ChangeEvent, FC, useState } from "react"
import { ProfileUserType } from "redux/ProfileReducer"
import { Preloader } from "../../common/preloader/Preloader"
import s from "../Profile.module.css"

type PropsType = {
	profile: ProfileUserType
	status: string
	isOwnStatus: boolean
	updateStatus: (status: string) => void
	saveAvatar: (file: File) => void
}
export const ProfileInfo: FC<PropsType> = ({ profile, status, isOwnStatus, updateStatus, saveAvatar }) => {
	const [changeAVatar, setChangeAvatar] = useState(false)

	const changeAvatarHendler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			saveAvatar(e.target.files[0])
		}
	}

	return (
		<>
			{profile ? (
				<div>
					<div className={s.infoBlock}>
						<img
							style={{ cursor: isOwnStatus ? "pointer" : "default" }}
							className={s.avatarImg}
							src={profile.photos?.large || ava}
							alt={"UserAvatar"}
							onClick={() => isOwnStatus && setChangeAvatar(true)}
						/>
						<div className={s.textBlock}>
							<span>{profile.fullName}</span>
							{isOwnStatus && changeAVatar && (
								<div className={s.changeAvetarBlock}>
									<input contextMenu={""} type={"file"} onChange={changeAvatarHendler} className={s.input} />
									<button onClick={() => setChangeAvatar(false)}>&#x2715;</button>
								</div>
							)}
							<div className={s.statusBlock}>
								<b>Status: </b>
								<ProfileStatus status={status} updateStatus={updateStatus} isOwnStatus={isOwnStatus} />
							</div>
						</div>
					</div>
					<ProfileData profile={profile} />
				</div>
			) : (
				<Preloader style={{ width: "25%", height: "25%" }} />
			)}
		</>
	)
}
