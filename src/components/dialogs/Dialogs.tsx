import React, {FC, useEffect} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {TextareaWithButton} from '../textareaWithButton/TextareaWithButton';
import {addDialogAC, addMessageAC, updateNewDialogTextAC, updateNewMessageTextAC} from '../../redux/DialogReducer';
import {DialogsContainerType} from './DialogsContainer';


export const Dialogs: FC<DialogsContainerType> = ({dialog, dispatch}) => {
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
                                    newText={dialog.newDialogText}
                                    dispatch={dispatch}
                                    addAC={addDialogAC}
                                    newTextAC={updateNewDialogTextAC}/>
            </div>
            <div className={s.messages}>
                {dialog.messages.map(i => <Message key={i.id} id={i.id} message={i.message}/>)}
                <TextareaWithButton buttonName="ADD MESSAGE"
                                    newText={dialog.newMessageText}
                                    dispatch={dispatch}
                                    addAC={addMessageAC}
                                    newTextAC={updateNewMessageTextAC}/>
            </div>
        </div>
    )
} 