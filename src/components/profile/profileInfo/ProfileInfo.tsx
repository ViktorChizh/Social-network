import React, {FC} from 'react';
import s from '../Profile.module.css';
import {ResponseUserProfileType} from 'redux/ProfileReducer';
import {Preloader} from '../../preloader/Preloader';
import ava from '../../../assets/avatar.webp'

type PropsType = {
    profile: ResponseUserProfileType | null
}
export const ProfileInfo: FC<PropsType> = ({profile}) => {
    return (
        <>
            {!profile
                ? <Preloader style={{width:'25%', height:'25%'}}/>
                : <div className={s.description}>
                    <img className={s.avatarImg} src={profile.photos.small || ava} alt={'UserAvatar'}/>
                    <span>{profile.fullName}</span>
                </div>}
        </>
    )
}