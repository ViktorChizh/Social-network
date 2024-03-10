const initialstate: UsersReducerType = {
    users: []
}

export const usersReducer = (state: UsersReducerType = initialstate, action: UsersReducerActionType): UsersReducerType => {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, users: [...action.payload.users]}
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}
        default:
            return state
    }
}
//actions
export const followAC = (userId: number) => ({type: 'FOLLOW' as const, payload: {userId}})
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW' as const, payload: {userId}})
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS' as const, payload: {users}})
//types
type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type UsersReducerType = {
    users: UserType[]
}
export type UsersReducerActionType =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>

export type ResponseUserType = {
    items: UserType[]
    totalCount: number
    error: string
}