import React, {Component} from 'react'
import s from './Users.module.css'
import {ResponseUserType, UsersReducerType, UserType} from '../../redux/UsersReducer';
import {User} from './user/User';
import axios from 'axios';

export class Users extends Component<UsersPropsType> {
    // сделаем получение стартовых данных в конструкторе (срабатывает 1 раз при создании компоненты)
    // вместо создания метода и кнопки
    constructor(props: UsersPropsType) {
        super(props)
        axios.get<ResponseUserType>('https://social-network.samuraijs.com/api/1.0/users?count=4&page=3249')
                 .then((res) => this.props.setUsers(res.data.items))
    }
    // getUsers() {...} - обычный синтаксис - необходимо байндить при вызове
    // getUsers = () => {  //синтаксис стрелочной функции позволяет не байндить метод при вызове
    //     if(this.props.users.users.length === 0){//проверка для избежания зацикленности запросов при перерисовке
    //         axios.get<ResponseUserType>('https://social-network.samuraijs.com/api/1.0/users?count=3&page=3249')
    //             .then((res) => this.props.setUsers(res.data.items))
    //     }
    // }
    render() {
        return (
            <div className={s.users}>
                {/*<button onClick={this.getUsers.bind(this)}>GET USERS</button>*/}
                {/*<button onClick={this.getUsers}>GET USERS</button>*/}
                {this.props.users.users.map(u =>
                    <User key={u.id} user={u} follow={this.props.follow} unFollow={this.props.unFollow}/>)}
            </div>
        )
    }
}

//types
type UsersPropsType = {
    users: UsersReducerType
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

