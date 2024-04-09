import { ComponentType } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { StateReduxType } from "../../redux/_Store-Redux"
import { setPageSize } from "../../redux/UsersReducer"
import { Settings } from "./Settings"
import { withAuthRedirect } from "hoc/withAuthRedirect"

const mapStateToProps = (state: StateReduxType): mStPType => ({
	pageSize: state.usersPage.pageSize,
})

export const SettingsContainer = compose<ComponentType>(
	withAuthRedirect,
	connect(mapStateToProps, { setPageSize }),
)(Settings)
//types
type mStPType = {
	pageSize: number
}
type mDtPType = {
	setPageSize: (pageSize: number) => void
}
export type DialogsContainerType = mStPType & mDtPType
