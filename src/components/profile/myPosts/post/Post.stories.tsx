import {Post} from './Post';
import React from 'react';
import ava from '../../../../assets/postAvatar.jpg'

export default {
    title: 'profile/myPosts/post/Post',
    component: Post
}

export const PostDemo = () => {
    return <Post id={1} message={'test message'} likesCount={0} avatar={ava}/>
}