import {combineReducers, createStore} from 'redux';
import {profifeReducer, ProfifeReducerActionType} from './Profile-reducer';
import {dialogReducer, DialogReducerActionType} from './DialogReducer';

export const redusers = combineReducers({
    profile: profifeReducer,
    dialogs: dialogReducer
})

export type StateReduxType = ReturnType<typeof redusers>
export type StoreActionType = ProfifeReducerActionType | DialogReducerActionType

export const store = createStore(redusers)

export type StoreReduxType = typeof store
//@ts-ignore
window.store=store