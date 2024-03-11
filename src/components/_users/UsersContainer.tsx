import React, {Component} from 'react'
import {connect} from 'react-redux';
import {StateReduxType} from '../../redux/_Store-Redux';
import {Dispatch} from 'redux';
import {
    followAC,
    ResponseUserType,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from '../../redux/UsersReducer';
import axios from 'axios';
import {Users} from './Users';

class UsersAPIComponent extends Component<UsersAPIComponentPropsType> {
    // сделаем получение стартовых данных в конструкторе (срабатывает 1 раз при создании компоненты)
    // вместо создания метода и кнопки
    // constructor(props: UsersPropsType) {
    //     super(props)
    // axios.get<ResponseUserType>('https://social-network.samuraijs.com/api/1.0/users?count=4&page=3249')
    //          .then((res) => this.props.setUsers(res.data.items))
    //}
    // getUsers() {...} - обычный синтаксис - необходимо байндить при вызове
    // getUsers = () => {  //синтаксис стрелочной функции позволяет не байндить метод при вызове
    //     if(this.props.users.users.length === 0){//проверка для избежания зацикленности запросов при перерисовке
    //         axios.get<ResponseUserType>('https://social-network.samuraijs.com/api/1.0/users?count=3&page=3249')
    //             .then((res) => this.props.setUsers(res.data.items))
    //     }
    // }
    // < button onClick = {this.getUsers.bind(this)} > GET USERS < /button>
    // <button onClick={this.getUsers}>GET USERS</button>
    // ПРАВИЛЬНО ЗАПРОСЫ ДЕЛАТЬ ЗДЕСЬ:
    componentDidMount() {
        axios.get<ResponseUserType>(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    componentDidUpdate() {
        axios.get<ResponseUserType>(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            setCurrentPage={this.props.setCurrentPage}
        />
    }
}


const mapStateToProps = (state: StateReduxType): mStPType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount
})

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
    follow: (userId: number) => dispatch(followAC(userId)),
    unFollow: (userId: number) => dispatch(unFollowAC(userId))
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
//types
type mStPType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
}
type mDtPType = {
    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export type DialogsContainerType = mStPType & mDtPType
type UsersAPIComponentPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}