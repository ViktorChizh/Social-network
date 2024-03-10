import {PostType} from '../components/_profile/myPosts/post/Post';
import ava from '../assets/postAvatar.jpg';

let initialState = {
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
        default:
            return state
    }
}
//types
export type ProfileType = {
    posts: PostType[]
    newPostText: string
}
export type ProfifeReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
//actions
export const addPostAC = () => ({type: 'ADD-POST' as const})
export const updateNewPostTextAC = (post: string) => ({
    type: 'UPDATE-NEW-POST-TEXT' as const,
    payload: {
        post
    }
})