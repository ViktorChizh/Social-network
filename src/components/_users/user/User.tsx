import React, {FC} from 'react';
import s from '../Users.module.css';
import {UserType} from '../../../redux/UsersReducer';
import ava from '../../../assets/avatar.webp'
import {NavLink} from 'react-router-dom';

export const User: FC<UserPropsType> = ({user, follow, unFollow}) => {
    return (
        <div className={s.block}>
            <div className={s.blockImg}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : ava} width="50px" height="50px" alt="avatar"/>
                </NavLink>
                {user.followed
                    ? <button onClick={() => unFollow(user.id)}>FOLLOW</button>
                    : <button onClick={() => follow(user.id)}>UNFOLLOW</button>}
            </div>
            <div className={s.blockMain}>
                <NavLink to={`/profile/${user.id}`}>
                    <span>{user.name}</span>
                </NavLink>
                <span className={s.status}>{user.status}</span>
            </div>
            {/*<div className={s.blockLocation}>*/}
            {/*    <span>{'user.location.country'}</span>*/}
            {/*    <span>{'user.location.city'}</span>*/}
            {/*</div>*/}
        </div>
    )
}
//types
type UserPropsType = {
    user: UserType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}