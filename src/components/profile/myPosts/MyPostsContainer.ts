import { ComponentType } from "react"
import { connect } from "react-redux"
import { compose, Dispatch } from "redux"
import { StateReduxType, StoreActionType } from "redux/_Store-Redux"
import { ProfileType } from "redux/ProfileReducer"
import { profilePageSelector } from "utils/selectors/selectors"
import { MyPosts } from "./MyPosts"

const mapStateToProps = (state: StateReduxType): mStPType => ({
	profile: profilePageSelector(state),
})

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({ dispatch })

export const MyPostsContainer = compose<ComponentType>(
	connect<mStPType, mDtPType, unknown, StateReduxType>(mapStateToProps, mapDispatchToProps),
)(MyPosts)
//types
type mStPType = {
	profile: ProfileType
}
type mDtPType = {
	dispatch: (action: StoreActionType) => void
}
export type MyPostsContainerType = mStPType & mDtPType
