import { applyMiddleware, combineReducers, createStore } from "redux"
import { profifeReducer, ProfifeReducerActionType } from "./ProfileReducer"
import { dialogReducer, DialogReducerActionType } from "./DialogReducer"
import { usersReducer, UsersReducerActionType } from "./UsersReducer"
import { authReducer, AuthReducerActionType } from "./AuthReducer"
import { reducer as formReducer } from "redux-form"
import thunkMiddleWare from "redux-thunk"

export const rootReduser = combineReducers({
	profilePage: profifeReducer,
	dialogsPage: dialogReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
})

export const store = createStore(rootReduser, applyMiddleware(thunkMiddleWare))
//types
export type StoreReduxType = typeof store
export type StoreAction =
	| ProfifeReducerActionType
	| DialogReducerActionType
	| UsersReducerActionType
	| AuthReducerActionType
export type StateRedux = ReturnType<typeof rootReduser>
//@ts-ignore
window.store = store
