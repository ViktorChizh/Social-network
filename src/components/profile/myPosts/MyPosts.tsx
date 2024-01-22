import React, {FC} from 'react'
import s from './MyPosts.module.css'
import {Post, PostType} from './post/Post';

type MyPostsPropsType = {
    posts: PostType[]
}

export const MyPosts: FC<MyPostsPropsType> = ({posts}) => {
    return (
        <div className={s.myPosts}>
            My posts
            <div className={s.newPost}>
                <textarea></textarea>
                <button>ADD POST</button>
            </div>
            {posts.map(i => <Post id={i.id} message={i.message} likesCount={i.likesCount} avatar={i.avatar}/>)}
        </div>
    )
}