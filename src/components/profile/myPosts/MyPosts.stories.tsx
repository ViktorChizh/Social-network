import {MyPosts} from './MyPosts';
import React from 'react';
import {store} from '../../../redux/Store';


export default {
    title: 'profile/myPosts/MyPosts',
    component: MyPosts
}

export const MyPostDemo = () => {
    return <MyPosts posts={store._state.profile.posts}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    newPostText={store._state.profile.newPostText} />
}