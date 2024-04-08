import React, { Component } from "react"
import { connect } from "react-redux"
import { StateReduxType } from "redux/_Store-Redux"
import { follow, getUsers, setButtonDisabled, setCurrentPage, unFollow, UserType } from "redux/UsersReducer"
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
		return (
			<div className={s.users}>
				{this.props.isPreloading ? (
					<Preloader style={{ width: "53%", height: "100%" }} />
				) : (
					<Users
						users={this.props.users}
						follow={this.props.follow}
						unFollow={this.props.unFollow}
						totalCount={this.props.totalCount}
						currentPage={this.props.currentPage}
						pageSize={this.props.pageSize}
						onPageChanged={this.onPageChanged.bind(this)}
						setButtonDisabled={this.props.setButtonDisabled}
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
})
const mapDispatchToProps = { setCurrentPage, follow, unFollow, setButtonDisabled, getUsers }
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
//types
type mStPType = {
	users: UserType[]
	pageSize: number
	currentPage: number
	totalCount: number
	isPreloading: boolean
	buttonDisabled: number[]
}
type mDtPType = {
	setCurrentPage: (currentPage: number) => void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setButtonDisabled: (isDisabled: boolean, id: number) => void
	getUsers: (pageSize: number, currentPage: number) => void
}
type UsersAPIComponentPropsType = mStPType & mDtPType
