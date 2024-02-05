import React, {FC} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from './dialogItem/DialogItem';
import {Message, MessageType} from './message/Message';
import {TextareaWithButton} from '../textareaWithButton/TextareaWithButton';
import {StoreActionType} from '../../redux/Store';
import {addDialogAC, addMessageAC, updateNewDialogTextAC, updateNewMessageTextAC} from '../../redux/Dialog-reducer';

export type DialogPropsType = {
    dialog: {
        dialogs: DialogItemProps[]
        newDialogText: string
        messages: MessageType[]
        newMessageText: string
    }
    dispatch: (action: StoreActionType) => void
}

export const Dialogs: FC<DialogPropsType> = ({dialog, dispatch }) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <span>Dialogs</span>
                {dialog.dialogs.map(i => <DialogItem key={i.id} id={i.id} name={i.name}/>)}
                <TextareaWithButton dispatch={dispatch} newText={dialog.newDialogText} addText={addDialogAC}
                                    updateNewText={updateNewDialogTextAC}/>
            </div>
            <div className={s.messages}>
                {dialog.messages.map(i => <Message key={i.id} id={i.id} message={i.message}/>)}
                <TextareaWithButton dispatch={dispatch} newText={dialog.newMessageText} addText={addMessageAC}
                                    updateNewText={updateNewMessageTextAC}/>
            </div>
        </div>
    )
} 