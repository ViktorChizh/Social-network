import {MyPosts} from './MyPosts';
import React from 'react';
import {store} from '../../../redux/Store-Redux';


export default {
    title: 'profile/myPosts/MyPosts',
    component: MyPosts
}

export const MyPostDemo = () => {
    return <MyPosts profile={store.getState().profile}
                    dispatch={store.dispatch.bind(store)} />
}