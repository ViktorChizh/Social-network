import React from 'react'
import {TextareaWithButton} from './TextareaWithButton';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/DialogReducer';
import {store} from '../../redux/_Store-Redux';

export default {
    title: 'TextareaWithButton',
    component: TextareaWithButton
}

export const TextareaWithButtonDemo = () => {

    return <TextareaWithButton buttonName="ADD"
                               newText={store.getState().profile.newPostText}
                               dispatch={store.dispatch}
                               addAC={addMessageAC}
                               newTextAC={updateNewMessageTextAC}/>
} 