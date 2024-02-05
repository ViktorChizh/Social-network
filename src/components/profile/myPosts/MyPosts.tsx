import React, {FC} from 'react'
import s from './MyPosts.module.css'
import {Post, PostType} from './post/Post';
import {TextareaWithButton} from '../../textareaWithButton/TextareaWithButton';
import {StoreActionType} from '../../../redux/Store';
import {addPostAC, updateNewPostTextAC} from '../../../redux/Profile-reducer';

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: StoreActionType) => void
}

export const MyPosts: FC<MyPostsPropsType> = ({posts, newPostText, dispatch}) => {

    return (
        <div className={s.myPosts}>
            <span>My posts</span>

            {posts.map(i => <Post key={i.id}
                                  id={i.id}
                                  message={i.message}
                                  likesCount={i.likesCount}
                                  avatar={i.avatar}/>)}
            <TextareaWithButton newText={newPostText}
                                dispatch={dispatch}
                                addText={addPostAC}
                                updateNewText={updateNewPostTextAC}/>
        </div>
    )
}