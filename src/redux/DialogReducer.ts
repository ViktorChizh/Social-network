import {DialogItemProps} from '../components/dialogs/dialogItem/DialogItem';
import {MessageType} from '../components/dialogs/message/Message';
import {StoreActionType} from './_Store';

export type DialogType = {
    dialogs: DialogItemProps[]
    newDialogText: string
    messages: MessageType[]
    newMessageText: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'},
        {id: 5, name: 'User5'},
        {id: 6, name: 'User6'},
        {id: 7, name: 'User7'}
    ],
    newDialogText: '',
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yow'},
        {id: 3, message: 'Hello'},
    ],
    newMessageText: ''
}

export const dialogReducer = (state: DialogType = initialState, action: StoreActionType): DialogType => {
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

export type DialogReducerActionType = ReturnType<typeof addDialogAC>
    | ReturnType<typeof updateNewDialogTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

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