import React, {FC, useEffect} from 'react'
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts'
import astronaft from '../../assets/avatar.webp'
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType} from './myPosts/post/Post';
import {StoreActionType} from '../../redux/_Store';

export type ProfilePropsType = {
    profile: {
        posts: PostType[]
        newPostText: string
    }
    dispatch: (action: StoreActionType) => void
}

export const Profile: FC<ProfilePropsType> = ({profile, dispatch}) => {
    useEffect(() => {
        setTimeout( ()=>{
            document.title = 'SocialNetwork - profile'
            }, 500)})
    return (
        <div className={s.main}>
            <ProfileInfo srcImage={astronaft} altImage="avatar" description="user's description"/>
            <MyPosts posts={profile.posts}
                     newPostText={profile.newPostText}
                     dispatch={dispatch}/>
        </div>
    )
}