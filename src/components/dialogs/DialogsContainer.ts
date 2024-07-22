import { withAuthRedirect } from "utils/hoc/withAuthRedirect"
import { ComponentType } from "react"
import { dialogSelector, isLoggedInSelector } from "utils/selectors/selectors"
import { Dialogs } from "./Dialogs"
import { connect } from "react-redux"
import { StateRedux, StoreAction } from "redux/_Store-Redux"
import { DialogPage } from "redux/DialogReducer"
import { compose, Dispatch } from "redux"

const mapStateToProps = (state: StateRedux): MStP => ({
	dialog: dialogSelector(state),
	isLoggedIn: isLoggedInSelector(state),
})

const mapDispatchToProps = (dispatch: Dispatch): MDtP => ({ dispatch })

const DialogsContainer = compose<ComponentType>(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)
//types
type MStP = {
	dialog: DialogPage
	isLoggedIn: boolean
}
type MDtP = {
	dispatch: (AC: StoreAction) => void
}
export type DialogsContainerType = MStP & MDtP

export default DialogsContainer
