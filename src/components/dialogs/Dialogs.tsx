import React, {FC, useEffect} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from './dialogItem/DialogItem';
import {Message, MessageType} from './message/Message';
import {TextareaWithButton} from '../textareaWithButton/TextareaWithButton';
import {StoreActionType} from '../../redux/_Store';
import {addDialogAC, addMessageAC, updateNewDialogTextAC, updateNewMessageTextAC} from '../../redux/DialogReducer';

export type DialogPropsType = {
    dialog: {
        dialogs: DialogItemProps[]
        newDialogText: string
        messages: MessageType[]
        newMessageText: string
    }
    dispatch: (action: StoreActionType) => void
}

export const Dialogs: FC<DialogPropsType> = ({dialog, dispatch}) => {
    useEffect(() => {
        setTimeout( ()=>{
            document.title = 'SocialNetwork - dialogs'
        }, 500)})
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <span>Dialogs</span>
                {dialog.dialogs.map(i => <DialogItem key={i.id} id={i.id} name={i.name}/>)}
                <TextareaWithButton buttonName="ADD DIALOG"
                                    dispatch={dispatch}
                                    newText={dialog.newDialogText}
                                    addText={addDialogAC}
                                    updateNewText={updateNewDialogTextAC}/>
            </div>
            <div className={s.messages}>
                {dialog.messages.map(i => <Message key={i.id} id={i.id} message={i.message}/>)}
                <TextareaWithButton buttonName="ADD MESSAGE"
                                    dispatch={dispatch}
                                    newText={dialog.newMessageText}
                                    addText={addMessageAC}
                                    updateNewText={updateNewMessageTextAC}/>
            </div>
        </div>
    )
} 