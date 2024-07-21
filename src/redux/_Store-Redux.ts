import { applyMiddleware, combineReducers, createStore } from "redux"
import { profifeReducer, ProfifeReducerAction } from "./ProfileReducer"
import { dialogReducer, DialogReducerAction } from "./DialogReducer"
import { usersReducer, UsersReducerAction } from "./UsersReducer"
import { authReducer, AuthReducerAction } from "./AuthReducer"
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
export type StoreRedux = typeof store
export type StoreAction = ProfifeReducerAction | DialogReducerAction | UsersReducerAction | AuthReducerAction
export type StateRedux = ReturnType<typeof rootReduser>

