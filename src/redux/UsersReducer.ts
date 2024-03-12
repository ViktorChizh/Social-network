const initialstate: UsersReducerType = {
    users: [],
    pageSize: 3,
    currentPage: 1,
    totalCount: 0,
    isPreloading: false
}

export const usersReducer = (state:UsersReducerType=initialstate,action:UsersReducerActionType):UsersReducerType => {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, users: action.payload.users}
        case 'SET-TOTALCOUNT':
            return {...state, totalCount: action.payload.totalCount}
        case 'SET-CURRENTPAGE':
            return {...state, currentPage: action.payload.currentPage}
        case 'SET-PAGESIZE':
            return {...state, pageSize: action.payload.pageSize}
        case 'SET-PRELOADER':
            return {...state, isPreloading: action.payload.isPreloading}
        case 'FOLLOW':
            return {...state,users:state.users.map(u => u.id===action.payload.userId?{...u,followed:true}:u)}
        case 'UNFOLLOW':
            return {...state,users:state.users.map(u => u.id===action.payload.userId?{...u,followed:false}:u)}
        default:
            return state
    }
}
//actions
export const follow = (userId: number) => ({type: 'FOLLOW' as const, payload: {userId}})
export const unFollow = (userId: number) => ({type: 'UNFOLLOW' as const, payload: {userId}})
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS' as const, payload: {users}})
export const setTotalCount = (totalCount: number) => ({type: 'SET-TOTALCOUNT' as const, payload: {totalCount}})
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENTPAGE' as const, payload: {currentPage}})
export const setPageSize = (pageSize: number) => ({type: 'SET-PAGESIZE' as const, payload: {pageSize}})
export const setPreloader = (isPreloading: boolean) => ({type: 'SET-PRELOADER' as const, payload: {isPreloading}})
//types
export type PhotosType = {
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
    isPreloading: boolean
}
export type ResponseUserType = {
    items: UserType[]
    totalCount: number
    error: string
}
export type UsersReducerActionType =
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setPageSize>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setPreloader>

