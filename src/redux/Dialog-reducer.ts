import {DialogItemProps} from '../components/dialogs/dialogItem/DialogItem';
import {MessageType} from '../components/dialogs/message/Message';
import {StoreActionType} from './Store';

export type DialogType = {
    dialogs: DialogItemProps[]
    newDialogText: string
    messages: MessageType[]
    newMessageText: string
}

export const DialogReducer = (state: DialogType, action: StoreActionType): DialogType => {
    switch (action.type) {
        case 'ADD-DIALOG': {
            let newDialog: DialogItemProps = {
                id: state.dialogs[state.dialogs.length - 1].id + 1,
                name: state.newDialogText
            }
            state.dialogs.push(newDialog)
            state.newDialogText = ''
            return state
        }
        case 'UPDATE-NEW-DIALOG-TEXT': {
            state.newDialogText = action.payload.dialog
            return state
        }
        case 'ADD-MESSAGE': {
            let newMessage: MessageType = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.newMessageText = action.payload.message
            return state
        }
        default:
            return state
    }
}

export type DialogReducerActionType =
    addDialogACType
    | updateNewDialogTextACType
    | addMessageACType
    | updateNewMessageTextACType

type addDialogACType = ReturnType<typeof addDialogAC>

export const addDialogAC = () => ({type: 'ADD-DIALOG' as const})

type updateNewDialogTextACType = ReturnType<typeof updateNewDialogTextAC>

export const updateNewDialogTextAC = (dialog: string) => ({
    type: 'UPDATE-NEW-DIALOG-TEXT' as const,
    payload: {
        dialog
    }
})

type addMessageACType = ReturnType<typeof addMessageAC>

export const addMessageAC = () => ({type: 'ADD-MESSAGE' as const})

type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

export const updateNewMessageTextAC = (message: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT' as const,
    payload: {
        message
    }
})