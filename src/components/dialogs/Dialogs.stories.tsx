import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Dialogs} from './Dialogs';
import {store} from '../../redux/Store';

export default {
    title: 'Dialogs',
    component: Dialogs
}

export const DialogsDemo = () => {
    return (
        // оборачиваю иначе не работают навлинки
        <BrowserRouter>
            <Dialogs dialog={store._state.dialog}
                     addMessage={store.addMessage.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}
                     addDialog={store.addDialog.bind(store)}
                     updateNewDialogText={store.updateNewDialogText.bind(store)}/>
        </BrowserRouter>
    )
} 