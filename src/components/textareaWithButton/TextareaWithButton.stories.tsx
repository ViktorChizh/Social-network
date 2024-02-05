import React from 'react'
import {TextareaWithButton} from './TextareaWithButton';
import {store} from '../../redux/Store'
import { addMessageAC, updateNewMessageTextAC} from '../../redux/Dialog-reducer';

export default {
    title: 'TextareaWithButton',
    component: TextareaWithButton
}

export const TextareaWithButtonDemo= () => {
    return <TextareaWithButton newText={store.getState().profile.newPostText}
                               dispatch={store.dispatch}
                               addText={addMessageAC}
                               updateNewText={updateNewMessageTextAC}/>
} 