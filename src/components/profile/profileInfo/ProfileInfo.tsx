import { ProfileStatus } from "components/profile/profileStatus/ProfileStatus"
import React, { ChangeEvent, FC, useState } from "react"
import { ProfileUserType } from "redux/ProfileReducer"
import s from "../Profile.module.css"
import { Preloader } from "../../common/preloader/Preloader"
import ava from "assets/avatar.webp"

type PropsType = {
	profile: Partial<ProfileUserType> | null
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
				<div className={s.description}>
					<img
						className={s.avatarImg}
						src={profile.photos?.large || ava}
						alt={"UserAvatar"}
						onClick={() => setChangeAvatar(true)}
					/>
					<div className={s.textBlock}>
						<span>{profile.fullName}</span>
						{isOwnStatus && changeAVatar && (
							<div className={s.changeAvetarBlock}>
								<input contextMenu={""} type={"file"} onChange={changeAvatarHendler} className={s.input} />
								<button onClick={() => setChangeAvatar(false)}>CLOSE</button>
							</div>
						)}
						<ProfileStatus status={status} updateStatus={updateStatus} isOwnStatus={isOwnStatus} />
					</div>
				</div>
			) : (
				<Preloader style={{ width: "25%", height: "25%" }} />
			)}
		</>
	)
}
