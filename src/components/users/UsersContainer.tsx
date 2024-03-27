import React, {Component} from 'react'
import {connect} from 'react-redux';
import {StateReduxType} from '../../redux/_Store-Redux';
import {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalCount,
    setUsers,
    unFollow,
    UserType
} from '../../redux/UsersReducer';
import {Users} from './Users';
import s from './Users.module.css';
import {Preloader} from '../preloader/Preloader';
import {api} from '../../api/API';

class UsersAPIComponent extends Component<UsersAPIComponentPropsType> {
    // получение стартовых данных в конструкторе (срабатывает 1 раз при создании компоненты)
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
        this.props.setPreloader(true)
        setTimeout(() => api.getUsers(this.props.pageSize, this.props.currentPage)
            .then((data) => {
                this.props.setPreloader(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            }), 1000)
    }

    onPageChanged(pageNumber: number) {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        setTimeout(() => api.getUsers(this.props.pageSize, pageNumber)
            .then((data) => {
                this.props.setPreloader(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            }), 1000)
    }

    render() {
        return (
            <div className={s.users}>
                {this.props.isPreloading
                    ? <Preloader style={{width: '53%', height: '100%'}}/>
                    : <Users
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        totalCount={this.props.totalCount}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged.bind(this)}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state: StateReduxType): mStPType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isPreloading: state.usersPage.isPreloading
})
const mapDispatchToProps = {setUsers, setTotalCount, setCurrentPage, follow, unFollow, setPreloader}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
//types
type mStPType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalCount: number
    isPreloading: boolean
}
type mDtPType = {
    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setPreloader: (isPreloader: boolean) => void
}
type UsersAPIComponentPropsType = mStPType & mDtPType