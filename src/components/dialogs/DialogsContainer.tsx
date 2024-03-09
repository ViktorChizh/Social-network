import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateReduxType, StoreActionType} from '../../redux/Store-Redux';
import {DialogType} from '../../redux/DialogReducer';
import {Dispatch} from 'redux';

type mStPType = {
    dialog: DialogType
}

const mapStateToProps = (state: StateReduxType): mStPType  =>  ({
        dialog: state.dialogs
    })

type mDtPType = {
    dispatch: (AC: StoreActionType) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mDtPType => ({dispatch})

export type DialogsContainerType = mStPType &  mDtPType
export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)

