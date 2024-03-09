import React, {FC, useEffect} from 'react'
import s from './Profile.module.css'
import astronaft from '../../assets/avatar.webp'
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostsContainer} from './myPosts/MyPostsContainer';


export const Profile: FC= (props) => {
    useEffect(() => {
        setTimeout( () => {
            document.title = 'SocialNetwork - profile'
            }, 500)})
    return (
        <div className={s.main}>
            <ProfileInfo srcImage={astronaft} altImage="avatar" description="user's description"/>
            <MyPostsContainer />
        </div>
    )
}