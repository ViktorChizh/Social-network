import { withAuthRedirect } from "hoc/withAuthRedirect"
import { ComponentType } from "react"
import { Dialogs } from "./Dialogs"
import { connect } from "react-redux"
import { StateReduxType, StoreActionType } from "redux/_Store-Redux"
import { DialogType } from "redux/DialogReducer"
import { compose, Dispatch } from "redux"

const mapStateToProps = (state: StateReduxType): mStPType => ({
	dialog: state.dialogsPage,
})

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({ dispatch })

export const DialogsContainer = compose<ComponentType>(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
//types
type mStPType = {
	dialog: DialogType
}
type mDtPType = {
	dispatch: (AC: StoreActionType) => void
}
export type DialogsContainerType = mStPType & mDtPType
