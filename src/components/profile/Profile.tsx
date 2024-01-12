import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts'
import cosmos from '../../assets/main.jpg'
import astronaft from '../../assets/avatar.webp'

export const Profile = () => {
    return (
        <div className={s.main}>
            <div>
                <img className={s.avatarImg} src={astronaft} alt="avatar"/> <span>user's description</span>
            </div>
            <MyPosts/>
        </div>
    )
}