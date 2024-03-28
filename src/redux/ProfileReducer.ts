import {PostType} from 'components/profile/myPosts/post/Post';
import ava from 'assets/postAvatar.jpg';
import {PhotosType} from './UsersReducer';

let initialState = {
    profile: null,
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 5,
            avatar: ava
        }
    ],
    newPostText: ''
}

export const profifeReducer = (state: ProfileType = initialState, action: ProfifeReducerActionType): ProfileType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,
                likesCount: 0,
                avatar: ava
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.payload.post}
        }
        case 'SET-PROFILE': {
            return {...state, profile: action.payload.profile}
        }
        default:
            return state
    }
}
//actions
export const addPostAC = () => ({type: 'ADD-POST' as const})
export const updateNewPostTextAC = (post: string) => ({type: 'UPDATE-NEW-POST-TEXT' as const,payload: {post}})
export const setProfile = (profile: ProfileUserType) => ({type: 'SET-PROFILE' as const,payload: {profile}})
//types
export type ProfileType = {
    profile: ResponseUserProfileType | null
    posts: PostType[]
    newPostText: string
}
export type ContactsType = {
    facebook: string | null
    website:  string | null
    vk:  string | null
    twitter:  string | null
    instagram:  string | null
    youtub:  string | null
    github:  string | null
    mainLink:  string | null
}
export type ProfileUserType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type ResponseUserProfileType = ProfileUserType & {userId: number}
export type ProfifeReducerActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setProfile>