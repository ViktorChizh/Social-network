import React from 'react'
import {TextareaWithButton} from './TextareaWithButton';
import {store} from '../../redux/Store'


export default {
    title: 'TextareaWithButton',
    component: TextareaWithButton
}

export const TextareaWithButtonDemo= () => {
    return <TextareaWithButton newText={store.getState().profile.newPostText}
                               addText={store.addPost}
                               updateNewText={store.updateNewPostText}/>
} 