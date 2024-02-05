import {MyPosts} from './MyPosts';
import React from 'react';
import {store} from '../../../redux/Store';


export default {
    title: 'profile/myPosts/MyPosts',
    component: MyPosts
}

export const MyPostDemo = () => {
    return <MyPosts posts={store._state.profile.posts}
                    dispatch={store.dispatch.bind(store)}
                    newPostText={store._state.profile.newPostText} />
}