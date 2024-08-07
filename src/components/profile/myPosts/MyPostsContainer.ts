import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {StateRedux, StoreAction} from 'redux/_Store-Redux'
import {ProfilePage} from 'redux/ProfileReducer'
import {profilePageSelector} from 'utils/selectors/selectors'
import {MyPosts} from './MyPosts'

const mapStateToProps = (state: StateRedux): MStP => ({
	profile: profilePageSelector(state),
})

const mapDispatchToProps = (dispatch: Dispatch): MDtP => ({ dispatch })

export const MyPostsContainer = connect<MStP, MDtP, unknown, StateRedux>(mapStateToProps, mapDispatchToProps)(MyPosts)
//types
type MStP = {
	profile: ProfilePage
}
type MDtP = {
	dispatch: (action: StoreAction) => void
}
export type PostsContainer = MStP & MDtP
