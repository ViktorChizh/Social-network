import {Profile} from './Profile';
import React from 'react';
import {store} from '../../redux/Store-Redux';


export default {
    title: 'Profile',
    component: Profile
}

export const ProfileDemo = () => {
    return <Profile profile={store.getState().profile}
                    dispatch={store.dispatch.bind(store)}/>
}