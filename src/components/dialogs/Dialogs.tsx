import React, {FC, LegacyRef} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from './dialogItem/DialogItem';
import {Message, MessageType} from './message/Message';

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
    const newDialogElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()
    const updateNewDialogTextHandler = () => {
        newDialogElement.current && updateNewDialogText(newDialogElement.current.value)
    }
    const newMessageElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()
    const updateNewMessageTextHandler = () => {
        newMessageElement.current && updateNewMessageText(newMessageElement.current.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <span>Dialogs</span>
                {dialog.dialogs.map(i => <DialogItem id={i.id} name={i.name}/>)}
                <div>
                    <textarea ref={newDialogElement}
                              value={dialog.newDialogText}
                              onChange={updateNewDialogTextHandler}/>
                    <button onClick={addDialog}>ADD DIALOG</button>
                </div>
            </div>
            <div className={s.messages}>
                {dialog.messages.map(i => <Message id={i.id} message={i.message}/>)}
                <div className={s.newMessage}>
                    <textarea ref={newMessageElement}
                              value={dialog.newMessageText}
                              onChange={updateNewMessageTextHandler}/>
                    <button onClick={addMessage}>ADD MESSAGE</button>
                </div>
            </div>
        </div>
    )
} 