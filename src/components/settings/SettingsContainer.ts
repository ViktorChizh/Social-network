import { ComponentType } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { isLoggedInSelector, pageSizeSelector } from "utils/selectors/selectors"
import { StateRedux } from "../../redux/_Store-Redux"
import { setPageSize } from "../../redux/UsersReducer"
import { Settings } from "./Settings"
import { withAuthRedirect } from "utils/hoc/withAuthRedirect"

const mapStateToProps = (state: StateRedux): mStPType => ({
	pageSize: pageSizeSelector(state),
	isLoggedIn: isLoggedInSelector(state),
})

const SettingsContainer = compose<ComponentType>(withAuthRedirect, connect(mapStateToProps, { setPageSize }))(Settings)
//types
type mStPType = {
	pageSize: number
	isLoggedIn: boolean
}
type mDtPType = {
	setPageSize: (pageSize: number) => void
}
export type DialogsContainerType = mStPType & mDtPType

export default SettingsContainer
