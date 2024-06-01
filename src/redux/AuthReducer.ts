import { api, ResponseAuthType } from "api/API"
import { FormType } from "components/login/loginForm/LoginForm"
import { Dispatch } from "redux"
import { stopSubmit } from "redux-form"
import { ThunkDispatch } from "redux-thunk"
import defaultAvatar from "../assets/avatar.webp"

let initialState: AuthReducerType = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isLoggedIn: false,
	ownUserAvatar: null,
}

export const authReducer = (state: AuthReducerType = initialState, action: AuthReducerActionType): AuthReducerType => {
	switch (action.type) {
		case "auth/INITIALIZE":
			return { ...state, isAuth: true }
		case "auth/SET_USER_DATA":
			return {
				...state,
				...action.payload.data,
				isLoggedIn: true,
				ownUserAvatar: action.payload.ownUserAvatar || defaultAvatar,
			}
		case "auth/LOGOUT_USER":
			return { ...initialState, isAuth: true }
		default:
			return state
	}
}
//types
export type AuthReducerType = ResponseAuthType & {
	isAuth: boolean
	isLoggedIn: boolean
	ownUserAvatar: string | null
}
export type AuthReducerActionType =
	| ReturnType<typeof setAuthUserData>
	| ReturnType<typeof logoutUser>
	| ReturnType<typeof initialize>
//actions
export const setAuthUserData = (data: ResponseAuthType, ownUserAvatar: string | null) => ({
	type: "auth/SET_USER_DATA" as const,
	payload: { data, ownUserAvatar },
})
export const initialize = (isLoggedIn: boolean) => ({
	type: "auth/INITIALIZE" as const,
	payload: { isLoggedIn },
})
export const logoutUser = () => ({
	type: "auth/LOGOUT_USER" as const,
})
// thunks
export const checkInitialize = () => async (dispatch: Dispatch) => {
	const res = await api.getMe()
	if (res.resultCode === 0) {
		dispatch(initialize(true))
	} else {
		dispatch(initialize(false))
	}
}
export const getAuthUserData = () => async (dispatch: Dispatch) => {
	const res = await api.getMe()
	if (res.resultCode === 0) {
		let authData = res.data
		const data = await api.getProfile(res.data.id)
		dispatch(setAuthUserData(authData, data.photos.small))
	}
}
export const login =
	(formData: FormType) => async (dispatch: ThunkDispatch<AuthReducerType, unknown, AuthReducerActionType>) => {
		const res = await api.login(formData)
		if (res.resultCode === 0) {
			await dispatch(getAuthUserData())
		} else {
			dispatch(stopSubmit("login", { _error: res.messages.length > 0 ? res.messages[0] : "Some error" }))
			// если указать конкретное поле, то будет подсвечивать его (если сервер дает такую инфу):
			// dispatch(stopSubmit("login", { `${res.messages.field}`: `${res.messages.message}`})) // или промапать
		}
	}
export const logout = () => async (dispatch: Dispatch) => {
	const res = await api.logout()
	if (res.resultCode === 0) {
		dispatch(logoutUser())
	}
}
