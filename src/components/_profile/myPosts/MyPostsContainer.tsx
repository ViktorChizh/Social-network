import {MyPosts} from './MyPosts';
import {StateReduxType, StoreActionType} from '../../../redux/Store-Redux';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ProfileType} from '../../../redux/Profile-reducer';

type mStPType = {
    profile: ProfileType
}

const mapStateToProps = (state: StateReduxType): mStPType => ({
    profile: state.profile
})

type mDtPType = {
    dispatch: (action: StoreActionType) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({
    dispatch : (action: StoreActionType) => dispatch(action)
})

export type MyPostsContainerType = mStPType & mDtPType
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)