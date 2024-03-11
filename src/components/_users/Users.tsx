import React, {FC} from 'react'
import s from './Users.module.css';
import {Paginator} from '../paginator/Paginator';
import {User} from './user/User';
import {UserType} from '../../redux/UsersReducer';

export const Users: FC<UsersPropsType> = (props) => {
    let {users, pageSize, currentPage, totalCount, setCurrentPage, follow, unFollow} = props
    return (
        <div className={s.users}>
            <Paginator totalCount={totalCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       setCurrentPage={setCurrentPage}/>
            {users.map(u => <User key={u.id} user={u} follow={follow} unFollow={unFollow}/>)}
        </div>
    )
}
//types
type UsersPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}