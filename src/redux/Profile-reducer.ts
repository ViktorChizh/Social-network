import {PostType} from '../components/_profile/myPosts/post/Post';
import ava from '../assets/postAvatar.jpg';
import {StoreActionType} from './Store-Redux';

export type ProfileType = {
    posts: PostType[]
    newPostText: string
}

let initialState =  {
        posts: [
            {
                id: 1,
                message: 'Hi, how are you?',
                likesCount: 5,
                avatar: ava
            },
            {
                id: 2,
                message: "It's my first post",
                likesCount: 7,
                avatar: ava
            }
        ],
        newPostText: ''
    }

export const profifeReducer = (state: ProfileType = initialState, action: StoreActionType): ProfileType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,
                likesCount: 0,
                avatar: ava
            }
            // state.posts.push(newPost)
            // state.newPostText = ''
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {

            return {...state, newPostText: action.payload.post}
        }
        default: return state
    }
}

export type ProfifeReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({type: 'ADD-POST' as const})

export const updateNewPostTextAC = (post: string) => ({
    type: 'UPDATE-NEW-POST-TEXT' as const,
    payload: {
        post
    }
})