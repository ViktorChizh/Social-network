import { api, PhotosType, ResponseProfileUserType } from "api/API"
import ava from "assets/postAvatar.jpg"
import { PostType } from "components/profile/myPosts/post/Post"
import { ProfileFormType } from "components/profile/profileInfo/profileFormData/ProfileFormData"
import { Action, Dispatch } from "redux"
import { stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { StateReduxType } from "redux/_Store-Redux"
import { filterObjectInArray } from "utils/functions/filterInArray"

let initialState = {
	profile: {} as ProfileUserType,
	status: "",
	isError: false,
	posts: [
		{
			id: 1,
			message: "Hi, how are you?",
			likesCount: 5,
			avatar: ava,
		},
	],
}

export const profifeReducer = (state: ProfileType = initialState, action: ProfifeReducerActionType): ProfileType => {
	switch (action.type) {
		case "profile/ADD-POST": {
			let newPost: PostType = {
				id: state.posts[state.posts.length - 1].id + 1,
				message: action.payload.post || "",
				likesCount: 0,
				avatar: ava,
			}
			return { ...state, posts: [...state.posts, newPost] }
		}
		case "profile/DELETE-POST": {
			return { ...state, posts: filterObjectInArray(state.posts, "id", action.payload.id) }
		}
		case "profile/SET-PROFILE": {
			return { ...state, profile: action.payload.profile }
		}
		case "profile/SET-STATUS": {
			return { ...state, status: action.payload.status }
		}
		case "profile/SET-AVATAR": {
			return { ...state, profile: { ...state.profile, photos: action.payload.photos } }
		}
		case "profile/SET-ISERROR": {
			return { ...state, isError: action.payload.isError }
		}
		default:
			return state
	}
}
//actions
export const addPostAC = (post: string | undefined) => ({ type: "profile/ADD-POST" as const, payload: { post } })
export const deletePostAC = (id: number) => ({ type: "profile/DELETE-POST" as const, payload: { id } })
export const setProfile = (profile: ProfileUserType) => ({ type: "profile/SET-PROFILE" as const, payload: { profile } })
export const setStatus = (status: string) => ({ type: "profile/SET-STATUS" as const, payload: { status } })
export const setAvatar = (photos: PhotosType) => ({ type: "profile/SET-AVATAR" as const, payload: { photos } })
export const setIsError = (isError: boolean) => ({ type: "profile/SET-ISERROR" as const, payload: { isError } })

//thunks
export const getProfile = (userId: string) => async (dispatch: Dispatch) => {
	const res = await api.getProfile(+userId)
	dispatch(setProfile(res))
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
	const res = await api.getStatus(+userId)
	dispatch(setStatus(res))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
	const res = await api.updateStatus(status)
	if (res.resultCode === 0) {
		dispatch(setStatus(status))
	}
}
export const updateProfuleData =
	(formdata: ProfileFormType): ThunkAction<void, StateReduxType, unknown, Action> =>
	async (dispatch, getState) => {
		const res = await api.updateProfuleData(formdata)
		if (res.resultCode === 0) {
			getProfile(getState().auth.id?.toString() || "")
			dispatch(setIsError(false))
		} else {
			dispatch(stopSubmit("profile", { _error: res.messages.join(`<br/>`) }))
			dispatch(setIsError(true))
		}
	}
export const saveAvatar = (file: File) => async (dispatch: Dispatch) => {
	const res = await api.updateAvatar(file)
	if (res.resultCode === 0) {
		dispatch(setAvatar(res.data))
	}
}
//types
export type ProfileUserType = ResponseProfileUserType & { userId: number }

export type ProfileType = {
	profile: ProfileUserType
	status: string
	isError: boolean
	posts: PostType[]
}

export type ProfifeReducerActionType =
	| ReturnType<typeof addPostAC>
	| ReturnType<typeof deletePostAC>
	| ReturnType<typeof setProfile>
	| ReturnType<typeof setStatus>
	| ReturnType<typeof setAvatar>
	| ReturnType<typeof setIsError>
