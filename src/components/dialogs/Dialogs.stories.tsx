import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import { Dialogs } from './Dialogs';

export default {
    component: Dialogs
}

export const DialogsDemo = () => {
    return (
        // оборачиваю иначе не работают навлинки
        <BrowserRouter>
            <Dialogs/>
        </BrowserRouter>
    )
} 