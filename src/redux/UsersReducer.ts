import { api, UserType } from "api/API"
import { Dispatch } from "redux"
import { filterObjectInArray } from "utils/functions/filterInArray"
import { updateObjectInArray } from "utils/functions/updateObjectInArray"

const initialstate: UsersReducerType = {
	users: [],
	pageSize: 3,
	currentPage: 1,
	totalCount: 0,
	isPreloading: false,
	buttonDisabled: [],
}

export const usersReducer = (
	state: UsersReducerType = initialstate,
	action: UsersReducerActionType,
): UsersReducerType => {
	switch (action.type) {
		case "users/SET-USERS":
			return { ...state, users: action.payload.users }
		case "users/SET-TOTALCOUNT":
			return { ...state, totalCount: action.payload.totalCount }
		case "users/SET-CURRENTPAGE":
			return { ...state, currentPage: action.payload.currentPage }
		case "users/SET-PAGESIZE":
			return { ...state, pageSize: action.payload.pageSize }
		case "users/SET-PRELOADER":
			return { ...state, isPreloading: action.payload.isPreloading }
		case "users/FOLLOW-UNFOLLOW":
			return {
				...state,
				users: updateObjectInArray(state.users, "id", action.payload.userId, { followed: action.payload.followed }),
			}
		case "users/SET-BUTTON_DISABLED":
			return {
				...state,
				buttonDisabled: action.payload.isDisabled
					? [...state.buttonDisabled, action.payload.id]
					: filterObjectInArray(state.buttonDisabled, null, action.payload.id),
			}
		default:
			return state
	}
}
//actions
export const followUnFollow = (userId: number, followed: boolean) => ({
	type: "users/FOLLOW-UNFOLLOW" as const,
	payload: { userId, followed },
})
export const setUsers = (users: UserType[]) => ({ type: "users/SET-USERS" as const, payload: { users } })
export const setPageSize = (pageSize: number) => ({ type: "users/SET-PAGESIZE" as const, payload: { pageSize } })
export const setTotalCount = (totalCount: number) => ({
	type: "users/SET-TOTALCOUNT" as const,
	payload: { totalCount },
})
export const setCurrentPage = (currentPage: number) => ({
	type: "users/SET-CURRENTPAGE" as const,
	payload: { currentPage },
})
export const setPreloader = (isPreloading: boolean) => ({
	type: "users/SET-PRELOADER" as const,
	payload: { isPreloading },
})
export const setButtonDisabled = (isDisabled: boolean, id: number) => ({
	type: "users/SET-BUTTON_DISABLED" as const,
	payload: { isDisabled, id },
})
//thunks
export const getUsers = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
	dispatch(setPreloader(true))
	const data = await api.getUsers(pageSize, currentPage)
	dispatch(setPreloader(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalCount(data.totalCount))
}
export const toggleFollowUser = (id: number, followed: boolean) => async (dispatch: Dispatch) => {
	dispatch(setButtonDisabled(true, id))
	if (!followed) {
		const data = await api.getUnFollow(id)
		if (data.resultCode === 0) dispatch(followUnFollow(id, followed))
	} else {
		const data = await api.getFollow(id)
		if (data.resultCode === 0) dispatch(followUnFollow(id, followed))
	}
	dispatch(setButtonDisabled(false, id))
}
//types

export type UsersReducerType = {
	users: UserType[]
	pageSize: number
	currentPage: number
	totalCount: number
	isPreloading: boolean
	buttonDisabled: number[]
}
export type UsersReducerActionType =
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setTotalCount>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setPageSize>
	| ReturnType<typeof followUnFollow>
	| ReturnType<typeof setPreloader>
	| ReturnType<typeof setButtonDisabled>
