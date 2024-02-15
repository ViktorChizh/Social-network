import React, {FC} from 'react'
import s from './MyPosts.module.css'
import {Post, PostType} from './post/Post';
import {TextareaWithButton} from '../../textareaWithButton/TextareaWithButton';
import {StoreActionType} from '../../../redux/_Store';
import {addPostAC, updateNewPostTextAC} from '../../../redux/Profile-reducer';

type MyPostsPropsType = {
    profile: {
        posts: PostType[]
        newPostText: string
    }
    dispatch: (action: StoreActionType) => void
}

export const MyPosts: FC<MyPostsPropsType> = ({profile, dispatch}) => {
    return (
        <div className={s.myPosts}>
            <span>My posts</span>
            {profile.posts.map(i => <Post key={i.id} post={i}/>)}
            <TextareaWithButton buttonName="ADD POST"
                                newText={profile.newPostText}
                                dispatch={dispatch}
                                addText={addPostAC}
                                updateNewText={updateNewPostTextAC}/>
        </div>
    )
}