import React, {FC, useEffect} from 'react'
import s from '../components/_users/Users.module.css'
import {ResponseUserType, UsersReducerType, UserType} from '../redux/UsersReducer';
import {User} from '../components/_users/user/User';
import axios from 'axios';

//Переделали на классовую Users, т.к. нужны методы жизненного цикла, а хуков пока типа нет)

export const Users: FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {
    useEffect(() => {
        axios.get<ResponseUserType>('https://social-network.samuraijs.com/api/1.0/users?count=5&page=1249')
            .then((res)=> setUsers(res.data.items))
    }, []);

    return (
        <div className={s.users}>
            {users.users.map(u => <User key={u.id} user={u} follow={follow} unFollow={unFollow}/>)}
        </div>
    )
}
//types
type UsersPropsType = {
    users: UsersReducerType
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

