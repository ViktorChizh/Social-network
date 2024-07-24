import React from "react"
import { Redirect } from "react-router-dom"
import { addDialogAC, addMessageAC } from "../../redux/DialogReducer"
import { TextareaWithButton, TextForm } from "../common/textareaWithButton/TextareaWithButton"
import { DialogItem } from "./dialogItem/DialogItem"
import s from "./Dialogs.module.css"
import { ContainerDialogs } from "./DialogsContainer"
import { Message } from "./message/Message"

export const Dialogs = ({ dialog, dispatch, isLoggedIn }:ContainerDialogs) => {
	document.title = "SocialNetwork - dialogs"
	const addDialog = (formData: TextForm) => dispatch(addDialogAC(formData.addDialog))
	const addMessage = (formData: TextForm) => dispatch(addMessageAC(formData.addMessage))

	if (!isLoggedIn) return <Redirect to={"/login"} />
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<span>Dialogs</span>
				{dialog.dialogs.map((d) => (
					<DialogItem key={d.id} id={d.id} name={d.name} />
				))}
				<TextareaWithButton buttonName="ADD DIALOG" onSubmit={addDialog} placeholder="addDialog" name="addDialog" />
			</div>
			<div className={s.messages}>
				<span>Messages</span>
				{dialog.messages.map((m) => (
					<Message key={m.id} id={m.id} message={m.message}/>
				))}
				<TextareaWithButton buttonName="ADD MESSAGE" onSubmit={addMessage} placeholder="addMessage" name="addMessage"/>
			</div>
		</div>
	)
}
