import axios from "axios"

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "7786fc28-3a8a-4ff6-a330-c22ffae6ff54",
	},
})

export const api = {
	getMe() {
		return instance.get<ResponseServerType<ResponseAuthType>>(`auth/me`).then((res) => res.data)
	},

	getFollow(id: number) {
		return instance.post<ResponseServerType>(`follow/${id}`, {}).then((res) => res.data)
	},
	getUnFollow(id: number) {
		return instance.delete<ResponseServerType>(`follow/${id}`).then((res) => res.data)
	},

	getUsers(pageSize: number, currentPage: number) {
		return instance.get<ResponseUserType>(`users?count=${pageSize}&page=${currentPage}`).then((res) => res.data)
	},

	getProfile(id: number | null) {
		return instance.get<ResponseProfileUserType>(`profile/${id}`).then((res) => res.data)
	},
}
//types
export type ResponseAuthType = {
	id: number | null
	email: string | null
	login: string | null
}
export type ResponseServerType<D = {}> = {
	data: D
	resultCode: 0 | 1 | 10
	messages: string[]
}
export type ResponseUserType = {
	items: UserType[]
	totalCount: number
	error: string
}
export type ResponseProfileUserType = {
	aboutMe: string
	contacts: ContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: PhotosType
}

export type UserType = {
	id: number
	name: string
	status: string
	photos: PhotosType
	followed: boolean
}
export type ContactsType = {
	facebook: string | null
	website: string | null
	vk: string | null
	twitter: string | null
	instagram: string | null
	youtub: string | null
	github: string | null
	mainLink: string | null
}
export type PhotosType = {
	small: string
	large: string
}
