import s from "components/profile/Profile.module.css"
import { Contact } from "components/profile/profileInfo/contact/Contact"
import React from "react"
import { ProfileUserType } from "redux/ProfileReducer"

type Props = { profile: ProfileUserType }
export const ProfileData = ({ profile }: Props) => {
	return (
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
	)
}
