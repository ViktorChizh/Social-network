import React, {FC} from 'react'
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts'
import astronaft from '../../assets/avatar.webp'
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType} from './myPosts/post/Post';

export type ProfilePropsType = {
    profile: PostType[]
}

export const Profile: FC<ProfilePropsType> = ({profile}) => {
    return (
        <div className={s.main}>
            <ProfileInfo srcImage={astronaft} altImage="avatar" description="user's description"/>
            <MyPosts posts={profile}/>
        </div>
    )
}