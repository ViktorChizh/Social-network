import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Dialogs} from './Dialogs';
import {store} from '../../redux/Store-Redux';

export default {
    title: 'Dialogs',
    component: Dialogs
}

export const DialogsDemo = () => {
    return (
        // оборачиваю иначе не работают навлинки
        <BrowserRouter>
            <Dialogs dialog={store.getState().dialogs}
                     dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    )
} 