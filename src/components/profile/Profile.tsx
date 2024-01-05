import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.mainContent}>
            <div>
                <img className={s.mainImg} src="https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186_1280.jpg" alt="cosmos"/>
            </div>
            <div>
                <img className={s.avatarImg} src='https://cdn.pixabay.com/photo/2022/03/10/13/59/astronaut-7059915_1280.png' alt='avatar'/>
            </div>
            <MyPosts/>
        </div>
    )
}