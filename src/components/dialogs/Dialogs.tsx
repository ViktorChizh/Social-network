import React, {FC, LegacyRef} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from './dialogItem/DialogItem';
import {Message, MessageType} from './message/Message';
import {TextareaWithButton} from '../textareaWithButton/TextareaWithButton';

export type DialogPropsType = {
    dialog: {
        dialogs: DialogItemProps[]
        newDialogText: string
        messages: MessageType[]
        newMessageText: string
    }
    addMessage: () => void
    updateNewMessageText: (m: string) => void
    addDialog: () => void
    updateNewDialogText: (d: string) => void
}

export const Dialogs: FC<DialogPropsType> = ({
                                                 dialog,
                                                 addMessage,
                                                 addDialog,
                                                 updateNewMessageText,
                                                 updateNewDialogText
                                             }) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <span>Dialogs</span>
                {dialog.dialogs.map(i => <DialogItem key={i.id} id={i.id} name={i.name}/>)}
                <TextareaWithButton newText={dialog.newDialogText} addText={addDialog}
                                    updateNewText={updateNewDialogText}/>
            </div>
            <div className={s.messages}>
                {dialog.messages.map(i => <Message key={i.id} id={i.id} message={i.message}/>)}
                <TextareaWithButton newText={dialog.newMessageText} addText={addMessage}
                                    updateNewText={updateNewMessageText}/>
            </div>
        </div>
    )
} 