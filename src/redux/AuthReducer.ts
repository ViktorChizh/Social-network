import { api, ResponseAuth } from "api/API"
import { Form } from "components/login/loginForm/LoginForm"
import { Dispatch } from "redux"
import { stopSubmit } from "redux-form"
import { ThunkDispatch } from "redux-thunk"
import defaultAvatar from "../assets/avatar.webp"

let initialState: AuthReducer = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isLoggedIn: false,
	ownUserAvatar: null,
	captchaUrl: null,
}

export const authReducer = (state: AuthReducer = initialState, action: AuthReducerAction): AuthReducer => {
	switch (action.type) {
		case "auth/INITIALIZE":
			return { ...state, isAuth: true }
		case "auth/ISLOGGEDIN":
			return { ...state, isLoggedIn: action.payload.isLoggedIn }
		case "auth/SET_USER_DATA":
			return {
				...state,
				...action.payload.data,
				isLoggedIn: true,
				ownUserAvatar: action.payload.ownUserAvatar || defaultAvatar,
			}
		case "auth/LOGOUT_USER":
			return { ...initialState, isAuth: true }
		case "auth/CAPTCHA_URL":
			return { ...state, captchaUrl: action.payload.captchaUrl }
		default:
			return state
	}
}
//types
export type AuthReducer = ResponseAuth & {
	isAuth: boolean
	isLoggedIn: boolean
	ownUserAvatar: string | null
	captchaUrl: string | null
}
export type AuthReducerAction =
	| ReturnType<typeof setAuthUserData>
	| ReturnType<typeof logoutUser>
	| ReturnType<typeof initialize>
	| ReturnType<typeof setCaptchaUrl>
	| ReturnType<typeof setIsLoggedIn>
//actions
export const setAuthUserData = (data: ResponseAuth, ownUserAvatar: string | null) => ({
	type: "auth/SET_USER_DATA" as const,
	payload: { data, ownUserAvatar },
})
export const initialize = () => ({
	type: "auth/INITIALIZE" as const,
})
export const logoutUser = () => ({
	type: "auth/LOGOUT_USER" as const,
})
export const setIsLoggedIn = (isLoggedIn: boolean) => ({
	type: "auth/ISLOGGEDIN" as const,
	payload: { isLoggedIn },
})

export const setCaptchaUrl = (captchaUrl: string | null) => ({
	type: "auth/CAPTCHA_URL" as const,
	payload: { captchaUrl },
})
// thunks
export const checkInitialize = () => async (dispatch: Dispatch) => {
	const res = await api.getMe()
	if (res.resultCode === 0) {
		dispatch(initialize())
		dispatch(setIsLoggedIn(true))
	} else {
		dispatch(initialize())
		dispatch(setIsLoggedIn(false))
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
	(formData: Form) => async (dispatch: ThunkDispatch<AuthReducer, unknown, AuthReducerAction>) => {
		const res = await api.login(formData)
		if (res.resultCode === 0) {
			await dispatch(getAuthUserData())
			dispatch(setIsLoggedIn(true))
			dispatch(setCaptchaUrl(null))
		} else {
			if (res.resultCode === 10) {
				await dispatch(getCaptchaUrl())
			}
			dispatch(setIsLoggedIn(false))
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

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
	const res = await api.getCaptcha()
	dispatch(setCaptchaUrl(res.url))
}
