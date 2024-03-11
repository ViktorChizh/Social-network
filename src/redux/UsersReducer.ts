const initialstate: UsersReducerType = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 0
}

export const usersReducer = (state: UsersReducerType = initialstate, action: UsersReducerActionType): UsersReducerType => {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, users: action.payload.users}
        case 'SET-TOTALCOUNT':
            return {...state, totalCount: action.payload.totalCount}
        case 'SET-CURRENTPAGE':
            return {...state, currentPage: action.payload.currentPage}
        case 'SET-PAGESIZE':
            return {...state, pageSize: action.payload.pageSize}
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
export const setTotalCountAC = (totalCount: number) => ({type: 'SET-TOTALCOUNT' as const, payload: {totalCount}})
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENTPAGE' as const, payload: {currentPage}})
export const setPageSizeAC = (pageSize: number) => ({type: 'SET-PAGESIZE' as const, payload: {pageSize}})

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
    pageSize: number
    currentPage: number
    totalCount: number
}
export type UsersReducerActionType =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPageSizeAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>

export type ResponseUserType = {
    items: UserType[]
    totalCount: number
    error: string
}