import { api, ResponseProfileUserType } from "api/API"
import ava from "assets/postAvatar.jpg"
import { PostType } from "components/profile/myPosts/post/Post"
import { Dispatch } from "redux"

let initialState = {
	profile: null,
	posts: [
		{
			id: 1,
			message: "Hi, how are you?",
			likesCount: 5,
			avatar: ava,
		},
	],
	newPostText: "",
}

export const profifeReducer = (state: ProfileType = initialState, action: ProfifeReducerActionType): ProfileType => {
	switch (action.type) {
		case "ADD-POST": {
			let newPost: PostType = {
				id: state.posts[state.posts.length - 1].id + 1,
				message: state.newPostText,
				likesCount: 0,
				avatar: ava,
			}
			return { ...state, posts: [...state.posts, newPost], newPostText: "" }
		}
		case "UPDATE-NEW-POST-TEXT": {
			return { ...state, newPostText: action.payload.post }
		}
		case "SET-PROFILE": {
			return { ...state, profile: action.payload.profile }
		}
		default:
			return state
	}
}
//actions
export const addPostAC = () => ({ type: "ADD-POST" as const })
export const updateNewPostTextAC = (post: string) => ({ type: "UPDATE-NEW-POST-TEXT" as const, payload: { post } })
export const setProfile = (profile: ProfileUserType) => ({ type: "SET-PROFILE" as const, payload: { profile } })
//thunks
export const getProfile = (userId: string) => async (dispatch: Dispatch) => {
	const res = await api.getProfile(+userId)
	dispatch(setProfile(res))
}
//types
export type ProfileUserType = ResponseProfileUserType & { userId: number }

export type ProfileType = {
	profile: ProfileUserType | null
	posts: PostType[]
	newPostText: string
}

export type ProfifeReducerActionType =
	| ReturnType<typeof addPostAC>
	| ReturnType<typeof updateNewPostTextAC>
	| ReturnType<typeof setProfile>
