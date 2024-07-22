import { DialogItemProps } from "../components/dialogs/dialogItem/DialogItem"
import { MessageType } from "../components/dialogs/message/Message"

let initialState = {
	dialogs: [
		{ id: 1, name: "User1" },
		{ id: 2, name: "User2" },
		{ id: 3, name: "User3" },
	],
	messages: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "Yow" },
		{ id: 3, message: "Hello" },
	],
}

export const dialogReducer = (state: DialogPage = initialState, action: DialogReducerAction): DialogPage => {
	switch (action.type) {
		case "dialog/ADD-DIALOG": {
			let newDialog: DialogItemProps = {
				id: state.dialogs[state.dialogs.length - 1].id + 1,
				name: action.payload.dialog || "",
			}
			return { ...state, dialogs: [...state.dialogs, newDialog] }
		}
		case "dialog/ADD-MESSAGE": {
			let newMessage: MessageType = {
				id: state.messages[state.messages.length - 1].id + 1,
				message: action.payload.message || "",
			}
			return { ...state, messages: [...state.messages, newMessage] }
		}
		default:
			return state
	}
}
//types
export type DialogPage = {
	dialogs: DialogItemProps[]
	messages: MessageType[]
}
export type DialogReducerAction = ReturnType<typeof addDialogAC> | ReturnType<typeof addMessageAC>
//actions
export const addDialogAC = (dialog: string | undefined) => ({ type: "dialog/ADD-DIALOG" as const, payload: { dialog } })
export const addMessageAC = (message: string | undefined) => ({
	type: "dialog/ADD-MESSAGE" as const,
	payload: { message },
})
