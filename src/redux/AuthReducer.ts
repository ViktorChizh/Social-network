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
	ownUserAvatar: null,
}

export const authReducer = (state: AuthReducerType = initialState, action: AuthReducerActionType): AuthReducerType => {
	switch (action.type) {
		case "SET_USER_DATA":
			return {
				...state,
				...action.payload.data,
				isAuth: true,
				ownUserAvatar: action.payload.ownUserAvatar || defaultAvatar,
			}
		case "LOGOUT_USER":
			return initialState
		default:
			return state
	}
}
//types
export type AuthReducerType = ResponseAuthType & {
	isAuth: boolean
	ownUserAvatar: string | null
}
export type AuthReducerActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof logoutUser>
//actions
export const setAuthUserData = (data: ResponseAuthType, ownUserAvatar: string | null) => ({
	type: "SET_USER_DATA" as const,
	payload: { data, ownUserAvatar },
})
export const logoutUser = () => ({
	type: "LOGOUT_USER" as const,
})
export const setError = (error: string) => ({
	type: "SET_ERROR" as const,
	payload: { error },
})
// thunks
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
