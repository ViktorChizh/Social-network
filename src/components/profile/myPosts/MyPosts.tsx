import React, {FC, LegacyRef} from 'react'
import s from './MyPosts.module.css'
import {Post, PostType} from './post/Post';

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (p: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = ({posts, newPostText,addPost,updateNewPostText}) => {

    const newPostElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()
    const updateNewPostTextHandler = () => {
        newPostElement.current && updateNewPostText(newPostElement.current.value)
    }

    return (
        <div className={s.myPosts}>
            <span>My posts</span>

            {posts.map(i => <Post id={i.id}
                                  message={i.message}
                                  likesCount={i.likesCount}
                                  avatar={i.avatar}/>)}
            <div className={s.newPost}>
                <textarea ref={newPostElement} value={newPostText} onChange={updateNewPostTextHandler}/>
                <button onClick={addPost}>ADD POST</button>
            </div>
        </div>
    )
}