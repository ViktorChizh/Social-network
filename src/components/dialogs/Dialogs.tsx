import React, {FC} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from './dialogItem/DialogItem';
import {Message, MessageType} from './message/Message';

export type DialogPropsType = {
    dialog: {
        dialogs: DialogItemProps[]
        messages: MessageType[]
    }
}

export const Dialogs: FC<DialogPropsType> = ({dialog}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <span>Dialogs</span>
                {dialog.dialogs.map(i=><DialogItem id={i.id} name={i.name}/>)}
                </div>
                <div className={s.messages}>
                    {dialog.messages.map(i=><Message id={i.id} message={i.message}/>)}
                </div>
            </div>
    )
} 