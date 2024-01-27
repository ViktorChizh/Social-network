import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Dialogs} from './Dialogs';
import {addDialog, addMessage, state, updateNewDialogText, updateNewMessageText} from '../../redux/State';

export default {
    title: 'Dialogs',
    component: Dialogs
}

export const DialogsDemo = () => {
    return (
        // оборачиваю иначе не работают навлинки
        <BrowserRouter>
            <Dialogs dialog={state.dialog}
                     addMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}
                     addDialog={addDialog}
                     updateNewDialogText={updateNewDialogText}/>
        </BrowserRouter>
    )
} 