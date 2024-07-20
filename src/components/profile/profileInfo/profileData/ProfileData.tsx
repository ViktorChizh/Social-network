import s from "components/profile/Profile.module.css"
import { Contact } from "components/profile/profileInfo/contact/Contact"
import React from "react"
import { ProfileUser } from "redux/ProfileReducer"

type Props = {
	profile: ProfileUser
	isOwnStatus: boolean
	setIsEditMode: (isEditMode: boolean) => void
}
export const ProfileData = ({ profile, isOwnStatus, setIsEditMode }: Props) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
			{isOwnStatus && (
				<button
					style={{ alignSelf: "self-start", padding: "10px", width: "35%", marginBottom: "10px" }}
					onClick={() => setIsEditMode(true)}>
					edit profile data
				</button>
			)}
			<div className={s.descriptionBlock}>
				<div>
					<b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
					{profile.lookingForAJob && (
						<div>
							<b>My professional skills: </b> {profile.lookingForAJobDescription}
						</div>
					)}
				</div>
				<div>
					<b>About me: </b> {profile.aboutMe}
				</div>
				<div>
					<b>Contacts: </b>
					{profile.contacts &&
						Object.keys(profile.contacts).map((key) => {
							return <Contact key={key} title={key} value={profile.contacts[key]} />
						})}
				</div>
			</div>
		</div>
	)
}
