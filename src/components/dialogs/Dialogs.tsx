import React, { FC } from "react"
import { addDialogAC, addMessageAC } from "../../redux/DialogReducer"
import { TextareaWithButton, TextFormType } from "../textareaWithButton/TextareaWithButton"
import { DialogItem } from "./dialogItem/DialogItem"
import s from "./Dialogs.module.css"
import { DialogsContainerType } from "./DialogsContainer"
import { Message } from "./message/Message"

export const Dialogs: FC<DialogsContainerType> = ({ dialog, dispatch }) => {
	document.title = "SocialNetwork - dialogs"
	const addDialog = (formData: TextFormType) => dispatch(addDialogAC(formData.addDialog))
	const addMessage = (formData: TextFormType) => dispatch(addMessageAC(formData.addMessage))

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<span>Dialogs</span>
				{dialog.dialogs.map((i) => (
					<DialogItem key={i.id} id={i.id} name={i.name} />
				))}
				<TextareaWithButton buttonName="ADD DIALOG" onSubmit={addDialog} placeholder="addDialog" name="addDialog" />
			</div>
			<div className={s.messages}>
				{dialog.messages.map((i) => (
					<Message key={i.id} id={i.id} message={i.message} />
				))}
				<TextareaWithButton buttonName="ADD MESSAGE" onSubmit={addMessage} placeholder="addMessage" name="addMessage" />
			</div>
		</div>
	)
}
