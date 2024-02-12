import {MyPosts} from './MyPosts';
import React from 'react';
import {_Store} from '../../../redux/_Store';


export default {
    title: 'profile/myPosts/MyPosts',
    component: MyPosts
}

export const MyPostDemo = () => {
    return <MyPosts posts={_Store._state.profile.posts}
                    dispatch={_Store.dispatch.bind(_Store)}
                    newPostText={_Store._state.profile.newPostText} />
}