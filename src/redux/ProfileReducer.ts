import { api, ResponseProfileUserType } from "api/API"
import ava from "assets/postAvatar.jpg"
import { PostType } from "components/profile/myPosts/post/Post"
import { Dispatch } from "redux"

let initialState = {
	profile: null,
	status: "",
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
		case "ADD-POST": {
			let newPost: PostType = {
				id: state.posts[state.posts.length - 1].id + 1,
				message: action.payload.post || "",
				likesCount: 0,
				avatar: ava,
			}
			return { ...state, posts: [...state.posts, newPost] }
		}
		case "SET-PROFILE": {
			return { ...state, profile: action.payload.profile }
		}
		case "SET-STATUS": {
			return { ...state, status: action.payload.status }
		}
		case "CHANGE-STATUS": {
			return { ...state, status: action.payload.status }
		}
		default:
			return state
	}
}
//actions
export const addPostAC = (post: string | undefined) => ({ type: "ADD-POST" as const, payload: { post } })
export const setProfile = (profile: ProfileUserType) => ({ type: "SET-PROFILE" as const, payload: { profile } })
export const setStatus = (status: string) => ({ type: "SET-STATUS" as const, payload: { status } })
export const changeStatus = (status: string) => ({ type: "CHANGE-STATUS" as const, payload: { status } })
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
		dispatch(changeStatus(status))
	}
}
//types
export type ProfileUserType = ResponseProfileUserType & { userId: number }

export type ProfileType = {
	profile: ProfileUserType | null
	status: string
	posts: PostType[]
}

export type ProfifeReducerActionType =
	| ReturnType<typeof addPostAC>
	| ReturnType<typeof setProfile>
	| ReturnType<typeof setStatus>
	| ReturnType<typeof changeStatus>
