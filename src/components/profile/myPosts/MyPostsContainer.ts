import { ComponentType } from "react"
import { connect } from "react-redux"
import { compose, Dispatch } from "redux"
import { StateRedux, StoreAction } from "redux/_Store-Redux"
import { ProfileType } from "redux/ProfileReducer"
import { profilePageSelector } from "utils/selectors/selectors"
import { MyPosts } from "./MyPosts"

const mapStateToProps = (state: StateRedux): mStPType => ({
	profile: profilePageSelector(state),
})

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({ dispatch })

export const MyPostsContainer = compose<ComponentType>(
	connect<mStPType, mDtPType, unknown, StateRedux>(mapStateToProps, mapDispatchToProps),
)(MyPosts)
//types
type mStPType = {
	profile: ProfileType
}
type mDtPType = {
	dispatch: (action: StoreAction) => void
}
export type MyPostsContainerType = mStPType & mDtPType
