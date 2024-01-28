import {Profile} from './Profile';
import React from 'react';
import {store} from '../../redux/Store';


export default {
    title: 'Profile',
    component: Profile
}

export const ProfileDemo = () => {
    return <Profile profile={store._state.profile}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}/>
}