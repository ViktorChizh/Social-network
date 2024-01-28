import React, {FC} from 'react'
import s from './MyPosts.module.css'
import {Post, PostType} from './post/Post';
import {TextareaWithButton} from '../../textarea-button/TextareaWithButton';

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (p: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = ({posts, newPostText, addPost, updateNewPostText}) => {

    return (
        <div className={s.myPosts}>
            <span>My posts</span>

            {posts.map(i => <Post key={i.id}
                                  id={i.id}
                                  message={i.message}
                                  likesCount={i.likesCount}
                                  avatar={i.avatar}/>)}
            <TextareaWithButton newText={newPostText} addText={addPost} updateNewText={updateNewPostText}/>
        </div>
    )
}