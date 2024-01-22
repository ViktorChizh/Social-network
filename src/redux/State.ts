import {PostType} from '../components/profile/myPosts/post/Post';
import {DialogItemProps} from '../components/dialogs/dialogItem/DialogItem';
import {MessageType} from '../components/dialogs/message/Message';
import ava from '../assets/postAvatar.jpg';

export type StateType = {
    profile: PostType[]
    dialog: {
        dialogs: DialogItemProps[]
        messages: MessageType[]
    }
}

export const state: StateType = {
    profile: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 5,
            avatar: ava
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 7,
            avatar: ava
        }
    ],
    dialog:{
        dialogs: [
            {id: 1, name: 'User1'},
            {id: 2, name: 'User2'},
            {id: 3, name: 'User3'},
            {id: 4, name: 'User4'},
            {id: 5, name: 'User5'},
            {id: 6, name: 'User6'},
            {id: 7, name: 'User7'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yow'},
            {id: 3, message: 'Hello'},
        ]
    }
}