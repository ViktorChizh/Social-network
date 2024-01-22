import React from 'react'
import {DialogItem} from './DialogItem'
import {BrowserRouter} from 'react-router-dom';

export default {
    title: 'dialogs/dialogItem/DialogItem',
    component: DialogItem
}

export const DialogItemDemo = () => {
    return (
        <BrowserRouter>
            <DialogItem id={1} name={'Test user'}/>
        </BrowserRouter>
    )
}