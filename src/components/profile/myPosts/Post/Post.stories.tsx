import {Post} from './Post';
import React from 'react';
import ava from '../../../../assets/postAvatar.jpg'

export default {
    component: Post
}

export const PostDemo = () => {
    return <Post message={'test message'} likesCount={0} avatar={ava}/>
}