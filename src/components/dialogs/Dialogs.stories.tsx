import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Dialogs} from './Dialogs';

export default {
    title: 'Dialogs',
    component: Dialogs
}

export const DialogsDemo = () => {
    return (
        // оборачиваю иначе не работают навлинки
        <BrowserRouter>
            <Dialogs dialog={{
                dialogs: [
                    {id: 1, name: 'User1'},
                    {id: 2, name: 'User2'},
                    {id: 3, name: 'User3'},
                    {id: 4, name: 'User4'},
                    {id: 5, name: 'User5'},
                    {id: 6, name: 'User6'},
                    {id: 7, name: 'User7'}
                ],
                messages: [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'Yow'},
                    {id: 3, message: 'Hello'},
                ]
            }}/>
        </BrowserRouter>
    )
} 