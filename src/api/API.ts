import axios from "axios"
import { Form } from "components/login/loginForm/LoginForm"
import { ProfileForm } from "components/profile/profileInfo/profileFormData/ProfileFormData"

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: { "API-KEY": "7786fc28-3a8a-4ff6-a330-c22ffae6ff54" },
})

export const api = {
	async getMe() {
		return instance.get<ResponseServer<ResponseAuth>>(`auth/me`).then((res) => res.data)
	},
	async login(formData: Form) {
		return instance.post<ResponseServer<{ id: number }>>(`auth/login`, formData).then((res) => res.data)
	},
	async logout() {
		return instance.delete<ResponseServer>(`auth/login`).then((res) => res.data)
	},

	async getCaptcha() {
		return instance.get<СaptchaResponse>(`security/get-captcha-url`).then((res) => res.data)
	},

	async getFollow(id: number) {
		return instance.post<ResponseServer>(`follow/${id}`, {}).then((res) => res.data)
	},
	async getUnFollow(id: number) {
		return instance.delete<ResponseServer>(`follow/${id}`).then((res) => res.data)
	},

	async getUsers(pageSize: number, currentPage: number) {
		return instance.get<ResponseUser>(`users?count=${pageSize}&page=${currentPage}`).then((res) => res.data)
	},

	async getProfile(id: number | null) {
		return instance.get<ResponseProfileUser>(`profile/${id}`).then((res) => res.data)
	},

	async getStatus(id: number) {
		return instance.get<string>(`profile/status/${id}`).then((res) => res.data)
	},
	async updateStatus(status: string) {
		return instance.put<ResponseServer>(`profile/status/`, { status }).then((res) => res.data)
	},
	async updateProfuleData(formdata: ProfileForm) {
		return instance.put<ResponseServer>(`profile/`, formdata).then((res) => res.data)
	},
	async updateAvatar(file: File) {
		const formData = new FormData()
		formData.append("image", file)
		return instance.put<ResponseServer<Photos>>(`profile/photo/`, formData, { headers: {
					"Content-Type": "multipart/form-data" }}).then((res) => res.data)
	},
}
//types
export type ResponseAuth = {
	id: number | null
	email: string | null
	login: string | null
}
export type ResponseServer<D = {}> = {
	data: D
	resultCode: 0 | 1 | 10
	messages: string[]
}
export type ResponseUser = {
	items: User[]
	totalCount: number
	error: string
}
export type ResponseProfileUser = {
	aboutMe: string
	contacts: Contacts
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: Photos
}

export type User = {
	id: number
	name: string
	status: string
	photos: Photos
	followed: boolean
}
export type Contacts = {
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
export type Photos = {
	small: string
	large: string
}

export type СaptchaResponse = {
	url: string
}
