import React, {FC} from 'react';
import s from '../Profile.module.css';

export type ProfileInfoType = {
    srcImage: string
    altImage: string
    description: string
}
export const ProfileInfo: FC<ProfileInfoType> = ({srcImage, altImage, description}) => {
    return (
        <div className={s.description}>
            <img className={s.avatarImg} src={srcImage} alt={altImage}/> <span>{description}</span>
        </div>
    )
}