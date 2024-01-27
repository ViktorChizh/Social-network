import {Profile} from './Profile';
import React from 'react';
import ava from '../../assets/postAvatar.jpg';
import {addPost, state, updateNewPostText} from '../../redux/State';


export default {
    title: 'Profile',
    component: Profile
}

export const ProfileDemo = () => {
    return <Profile profile={state.profile} addPost={addPost} updateNewPostText={updateNewPostText}/>
}