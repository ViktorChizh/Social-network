import {combineReducers, createStore} from 'redux';
import {profifeReducer, ProfifeReducerActionType} from './ProfileReducer';
import {dialogReducer, DialogReducerActionType} from './DialogReducer';
import {usersReducer, UsersReducerActionType} from './UsersReducer';

export const rootReduser = combineReducers({
    profilePage: profifeReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReduser)
//types
export type StoreReduxType = typeof store
export type StoreActionType = ProfifeReducerActionType | DialogReducerActionType | UsersReducerActionType
export type StateReduxType = ReturnType<typeof rootReduser>
//@ts-ignore
window.store=store