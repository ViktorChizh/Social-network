import {MyPosts} from './MyPosts';
import React from 'react';
import ava from '../../../assets/postAvatar.jpg';


export default {
    title: 'profile/myPosts/MyPosts',
    component: MyPosts
}

export const MyPostDemo = () => {
    return <MyPosts posts={[
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 5,
            avatar: ava
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 7,
            avatar: ava
        }
    ]}/>
}