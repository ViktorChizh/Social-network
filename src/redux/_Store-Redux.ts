import {combineReducers, createStore} from 'redux';
import {profifeReducer, ProfifeReducerActionType} from './ProfileReducer';
import {dialogReducer, DialogReducerActionType} from './DialogReducer';
import {usersReducer, UsersReducerActionType} from './UsersReducer';
import {authReducer, AuthReducerActionType} from './AuthReducer';

export const rootReduser = combineReducers({
    profilePage: profifeReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReduser)
//types
export type StoreReduxType = typeof store
export type StoreActionType =
    | ProfifeReducerActionType
    | DialogReducerActionType
    | UsersReducerActionType
    | AuthReducerActionType
export type StateReduxType = ReturnType<typeof rootReduser>
//@ts-ignore
window.store=store