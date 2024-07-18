import { ComponentType } from "react"
import { connect } from "react-redux"
import { compose, Dispatch } from "redux"
import { StateRedux, StoreAction } from "redux/_Store-Redux"
import { ProfileType } from "redux/ProfileReducer"
import { profilePageSelector } from "utils/selectors/selectors"
import { MyPosts } from "./MyPosts"

const mapStateToProps = (state: StateRedux): MStP => ({
	profile: profilePageSelector(state),
})

const mapDispatchToProps = (dispatch: Dispatch): MDtP => ({ dispatch })

export const MyPostsContainer = compose<ComponentType>(
	connect<MStP, MDtP, unknown, StateRedux>(mapStateToProps, mapDispatchToProps),
)(MyPosts)
//types
type MStP = {
	profile: ProfileType
}
type MDtP = {
	dispatch: (action: StoreAction) => void
}
export type PostsContainer = MStP & MDtP
