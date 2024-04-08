import { connect } from "react-redux"
import { StateReduxType } from "../../redux/_Store-Redux"
import { setPageSize } from "../../redux/UsersReducer"
import { Settings } from "./Settings"

const mapStateToProps = (state: StateReduxType): mStPType => ({
	pageSize: state.usersPage.pageSize,
})

export const SettingsContainer = connect(mapStateToProps, { setPageSize })(Settings)
//types
type mStPType = {
	pageSize: number
}
type mDtPType = {
	setPageSize: (pageSize: number) => void
}
export type DialogsContainerType = mStPType & mDtPType
