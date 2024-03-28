import axios from 'axios';
import {AuthType} from 'redux/AuthReducer';
import {ResponseServerType} from 'components/header/HeaderContainer';
import {ProfileUserType} from 'redux/ProfileReducer';
import {ResponseUserType} from 'redux/UsersReducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7786fc28-3a8a-4ff6-a330-c22ffae6ff54'
    }
})

export const api = {
    getMe() {
        return instance.get<ResponseServerType<AuthType>>(`auth/me`).then(res => res.data)
    },

    getFollow(id: number) {
        return instance.post<ResponseServerType>(`follow/${id}`, {}).then(res => res.data)
    },
    getUnFollow(id: number) {
        return instance.delete<ResponseServerType>(`follow/${id}`).then(res => res.data)
    },

    getUsers(pageSize: number, currentPage: number) {
        return instance.get<ResponseUserType>(`users?count=${pageSize}&page=${currentPage}`).then(res => res.data)
    },

    getProfile(id: number | null) {
        return instance.get<ProfileUserType>(`profile/${id}`).then(res => res.data)
    }
}