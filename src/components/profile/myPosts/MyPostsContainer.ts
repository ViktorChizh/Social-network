import {MyPosts} from './MyPosts';
import {StateReduxType, StoreActionType} from 'redux/_Store-Redux';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ProfileType} from 'redux/ProfileReducer';

const mapStateToProps = (state: StateReduxType): mStPType => ({
    profile: state.profilePage
})

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({dispatch})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
//types
type mStPType = {
    profile: ProfileType
}
type mDtPType = {
    dispatch: (action: StoreActionType) => void
}
export type MyPostsContainerType = mStPType & mDtPType
