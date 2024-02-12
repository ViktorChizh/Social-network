import React from 'react'
import {TextareaWithButton} from './TextareaWithButton';
import {_Store} from '../../redux/_Store'
import {addMessageAC, updateNewMessageTextAC} from '../../redux/DialogReducer';

export default {
    title: 'TextareaWithButton',
    component: TextareaWithButton
}

export const TextareaWithButtonDemo = () => {
    return <TextareaWithButton buttonName="ADD"
                               newText={_Store.getState().profile.newPostText}
                               dispatch={_Store.dispatch}
                               addText={addMessageAC}
                               updateNewText={updateNewMessageTextAC}/>
} 