import {connect} from 'react-redux';
import {StateReduxType} from '../../redux/_Store-Redux';
import {Dispatch} from 'redux';
import {setPageSizeAC} from '../../redux/UsersReducer';
import {Settings} from './Settings';


const mapStateToProps = (state: StateReduxType): mStPType => ({
    pageSize: state.usersPage.pageSize,
})

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({
    setPageSize: (pageSize: number) => dispatch(setPageSizeAC(pageSize)),
})

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)
//types
type mStPType = {
    pageSize: number
}
type mDtPType = {
    setPageSize: (pageSize: number) => void
}
export type DialogsContainerType = mStPType & mDtPType