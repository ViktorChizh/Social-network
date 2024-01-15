import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import ava from '../../../assets/postAvatar.jpg'

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My posts
            <div className={s.newPost}>
                <textarea></textarea>
                <button>ADD POST</button>
            </div>
            <Post message='Hi, how are you?' likesCount={5} avatar={ava}/>
            <Post message="It's my first post" likesCount={7} avatar={ava}/>
        </div>
    )
}