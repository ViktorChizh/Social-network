import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import s from "../Profile.module.css"

type Props = {
	status: string
	isOwnStatus: boolean
	updateStatus: (status: string) => void
}

export const ProfileStatus = ({ isOwnStatus, status, updateStatus }: Props) => {
	const [editMode, setEditMode] = useState(false)
	const [currentStatus, setCurrentStatus] = useState(status)
	useEffect(() => {
		setCurrentStatus(status)
	}, [status])
	const toggleEditMode = () => {
		if (isOwnStatus) {
			setEditMode(!editMode)
			updateStatus(currentStatus)
		}
	}
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentStatus(e.currentTarget.value)
	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "Enter" || e.code === "NumpadEnter") toggleEditMode()
	}
	return (
		<div className={s.statusBlock}>
			{!editMode ? (
				<div>
					<span onDoubleClick={toggleEditMode}>{status || "empty status"}</span>
				</div>
			) : (
				<div>
					<input
						autoFocus
						value={currentStatus}
						onBlur={toggleEditMode}
						onChange={(e) => onChangeHandler(e)}
						onKeyDown={(e) => onKeyDownHandler(e)}
					/>
				</div>
			)}
		</div>
	)
}
