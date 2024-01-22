import React from 'react';
import {ProfileInfo} from './ProfileInfo';
import astronaft from '../../../assets/avatar.webp'

export default {
    title: 'profile/profileInfo/ProfileInfo',
    component: ProfileInfo
}
export const ProfileInfoDemo = () => {
    return <ProfileInfo srcImage={astronaft} altImage="avatar" description="user's description"/>
}