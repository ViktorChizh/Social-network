import {Users} from './Users';
import {connect} from 'react-redux';
import {StateReduxType} from '../../redux/_Store-Redux';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unFollowAC, UsersReducerType, UserType} from '../../redux/UsersReducer';


const mapStateToProps = (state: StateReduxType): mStPType  =>  ({
    users: state.users
})

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    follow: (userId: number) => dispatch(followAC(userId)),
    unFollow: (userId: number) => dispatch(unFollowAC(userId))
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
//types
type mStPType = {
    users: UsersReducerType
}
type mDtPType = {
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export type DialogsContainerType = mStPType &  mDtPType