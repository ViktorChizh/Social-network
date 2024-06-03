import axios from "axios"
import { FormType } from "components/login/loginForm/LoginForm"
import { ProfileFormType } from "components/profile/profileInfo/profileFormData/ProfileFormData"

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "7786fc28-3a8a-4ff6-a330-c22ffae6ff54",
	},
})

export const api = {
	async getMe() {
		return instance.get<ResponseServerType<ResponseAuthType>>(`auth/me`).then((res) => res.data)
	},
	async login(formData: FormType) {
		return instance.post<ResponseServerType<{ id: number }>>(`auth/login`, formData).then((res) => res.data)
	},
	async logout() {
		return instance.delete<ResponseServerType>(`auth/login`).then((res) => res.data)
	},

	async getFollow(id: number) {
		return instance.post<ResponseServerType>(`follow/${id}`, {}).then((res) => res.data)
	},
	async getUnFollow(id: number) {
		return instance.delete<ResponseServerType>(`follow/${id}`).then((res) => res.data)
	},

	async getUsers(pageSize: number, currentPage: number) {
		return instance.get<ResponseUserType>(`users?count=${pageSize}&page=${currentPage}`).then((res) => res.data)
	},

	async getProfile(id: number | null) {
		return instance.get<ResponseProfileUserType>(`profile/${id}`).then((res) => res.data)
	},

	async getStatus(id: number) {
		return instance.get<string>(`profile/status/${id}`).then((res) => res.data)
	},
	async updateStatus(status: string) {
		return instance.put<ResponseServerType>(`profile/status/`, { status }).then((res) => res.data)
	},
	async updateProfuleData(formdata: ProfileFormType) {
		return instance.put<ResponseServerType>(`profile/`, formdata).then((res) => res.data)
	},
	async updateAvatar(file: File) {
		const formData = new FormData()
		formData.append("image", file)
		return instance
			.put<ResponseServerType<PhotosType>>(`profile/photo/`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => res.data)
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
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtub: string
	github: string
	mainLink: string
	[key: string]: string
}
export type PhotosType = {
	small: string
	large: string
}
