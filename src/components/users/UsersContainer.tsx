import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { StateReduxType } from "redux/_Store-Redux"
import { followUser, getUsers, setCurrentPage, unFollowUser, UserType } from "redux/UsersReducer"
import { Preloader } from "../preloader/Preloader"
import { Users } from "./Users"
import s from "./Users.module.css"

class UsersAPIComponent extends Component<UsersAPIComponentPropsType> {
	// получение стартовых данных в конструкторе (срабатывает 1 раз при создании компоненты)
	// вместо создания метода и кнопки:
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
		this.props.getUsers(this.props.pageSize, this.props.currentPage)
	}

	onPageChanged(pageNumber: number) {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(this.props.pageSize, pageNumber)
	}

	render() {
		if (!this.props.isAuth) return <Redirect to={"/login"} />
		return (
			<div className={s.users}>
				{this.props.isPreloading ? (
					<Preloader style={{ width: "53%", height: "100%" }} />
				) : (
					<Users
						users={this.props.users}
						followUser={this.props.followUser}
						unFollowUser={this.props.unFollowUser}
						totalCount={this.props.totalCount}
						currentPage={this.props.currentPage}
						pageSize={this.props.pageSize}
						onPageChanged={this.onPageChanged.bind(this)}
						buttonDisabled={this.props.buttonDisabled}
					/>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state: StateReduxType): mStPType => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	currentPage: state.usersPage.currentPage,
	totalCount: state.usersPage.totalCount,
	isPreloading: state.usersPage.isPreloading,
	buttonDisabled: state.usersPage.buttonDisabled,
	isAuth: state.auth.isAuth,
})
const mapDispatchToProps = { setCurrentPage, followUser, unFollowUser, getUsers }
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
//types
type mStPType = {
	users: UserType[]
	pageSize: number
	currentPage: number
	totalCount: number
	isPreloading: boolean
	buttonDisabled: number[]
	isAuth: boolean
}
type mDtPType = {
	setCurrentPage: (currentPage: number) => void
	followUser: (userId: number) => void
	unFollowUser: (userId: number) => void
	getUsers: (pageSize: number, currentPage: number) => void
}
type UsersAPIComponentPropsType = mStPType & mDtPType
