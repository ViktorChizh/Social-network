import React from 'react'
import {Message} from './Message';


export default {
    title: 'dialogs/message/Message',
    component: Message
}


export const MessageDemo = () => {
    return <Message id={1} message='Test message'/>
}