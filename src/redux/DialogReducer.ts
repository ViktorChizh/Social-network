import {DialogItemProps} from '../components/dialogs/dialogItem/DialogItem';
import {MessageType} from '../components/dialogs/message/Message';

let initialState = {
    dialogs: [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'}
    ],
    newDialogText: '',
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yow'},
        {id: 3, message: 'Hello'},
    ],
    newMessageText: ''
}

export const dialogReducer = (state: DialogType = initialState, action: DialogReducerActionType): DialogType => {
    switch (action.type) {
        case 'ADD-DIALOG': {
            let newDialog: DialogItemProps = {
                id: state.dialogs[state.dialogs.length - 1].id + 1,
                name: state.newDialogText
            }
            return {...state, dialogs: [...state.dialogs, newDialog], newDialogText: ''}
        }
        case 'UPDATE-NEW-DIALOG-TEXT': {
            return {...state, newDialogText: action.payload.dialog}
        }
        case 'ADD-MESSAGE': {
            let newMessage: MessageType = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: state.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.payload.message}
        }
        default:
            return state
    }
}
//types
export type DialogType = {
    dialogs: DialogItemProps[]
    newDialogText: string
    messages: MessageType[]
    newMessageText: string
}
export type DialogReducerActionType = ReturnType<typeof addDialogAC> | ReturnType<typeof updateNewDialogTextAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>
//actions
export const addDialogAC = () => ({type: 'ADD-DIALOG' as const})
export const updateNewDialogTextAC = (dialog: string) => ({
    type: 'UPDATE-NEW-DIALOG-TEXT' as const,
    payload: {
        dialog
    }
})
export const addMessageAC = () => ({type: 'ADD-MESSAGE' as const})
export const updateNewMessageTextAC = (message: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT' as const,
    payload: {
        message
    }
})