import {Profile} from './Profile';
import React from 'react';
import ava from '../../assets/postAvatar.jpg';


export default {
    title: 'Profile',
    component: Profile
}

export const ProfileDemo = () => {
    return <Profile profile={[
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