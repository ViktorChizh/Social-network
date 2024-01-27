import {MyPosts} from './MyPosts';
import React from 'react';
import {addPost, state, updateNewPostText} from '../../../redux/State';


export default {
    title: 'profile/myPosts/MyPosts',
    component: MyPosts
}

export const MyPostDemo = () => {
    return <MyPosts posts={state.profile.posts}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    newPostText={state.profile.newPostText} />
}