import React, {FC} from 'react'
import {Paginator} from '../paginator/Paginator';
import {User} from './user/User';
import {UserType} from '../../redux/UsersReducer';


export const Users: FC<UsersPropsType> = (props) => {
    let {users, pageSize, currentPage, totalCount, onPageChanged, follow, unFollow} = props
    return (
        <>
            <Paginator totalCount={totalCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {users.map(u => <User key={u.id} user={u} follow={follow} unFollow={unFollow}/>)}
        </>
    )
}
//types
type UsersPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}