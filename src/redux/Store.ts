import {PostType} from '../components/profile/myPosts/post/Post';
import {DialogItemProps} from '../components/dialogs/dialogItem/DialogItem';
import {MessageType} from '../components/dialogs/message/Message';
import ava from '../assets/postAvatar.jpg';

export type StateType = {
    profile: {
        posts: PostType[]
        newPostText: string
    }
    dialog: {
        dialogs: DialogItemProps[]
        newDialogText: string
        messages: MessageType[]
        newMessageText: string
    }
}

export type StoreType = {
    _state: StateType
    getState: ()=> StateType
    _callSubscriber: (s: StoreType)=>void
    subscriber: (observer: (s: StoreType)=>void)=>void
    addPost: ()=>void
    updateNewPostText: (p: string) => void
    addMessage: ()=>void
    updateNewDialogText: (d: string) => void
    addDialog: ()=>void
    updateNewMessageText: (m: string) => void
}

export const store: StoreType = {
    _state: {
        profile: {
            posts: [
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
            newPostText: ''
        },
        dialog: {
            dialogs: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
                {id: 4, name: 'User4'},
                {id: 5, name: 'User5'},
                {id: 6, name: 'User6'},
                {id: 7, name: 'User7'}
            ],
            newDialogText: '',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yow'},
                {id: 3, message: 'Hello'},
            ],
            newMessageText: ''
        }
    },
    getState(){return this._state},
    _callSubscriber(this) {
        // stub function: временная пустая функция заглушка - нужна, чтобы всё скомпилилось при запуске
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    addPost() {
        let newPost: PostType = {
            id: this._state.profile.posts[this._state.profile.posts.length - 1].id + 1,
            message: this._state.profile.newPostText,
            likesCount: 0,
            avatar: ava
        }
        this._state.profile.posts.push(newPost)
        this._state.profile.newPostText = ''
        this._callSubscriber(this)
    },
    updateNewPostText(post: string) {
        this._state.profile.newPostText = post
        this._callSubscriber(this)
    },
    addMessage() {
        let newMessage: MessageType = {
            id: this._state.dialog.messages[this._state.dialog.messages.length - 1].id + 1,
            message: this._state.dialog.newMessageText
        }
        this._state.dialog.messages.push(newMessage)
        this._state.dialog.newMessageText = ''
        this._callSubscriber(this)
    },
    updateNewDialogText(message: string) {
        this._state.dialog.newDialogText = message
        this._callSubscriber(this)
    },
    addDialog() {
        let newDialog: DialogItemProps = {
            id: this._state.dialog.dialogs[this._state.dialog.dialogs.length - 1].id + 1,
            name: this._state.dialog.newDialogText
        }
        this._state.dialog.dialogs.push(newDialog)
        this._state.dialog.newDialogText = ''
        this._callSubscriber(this)
    },
    updateNewMessageText(dialog: string) {
        this._state.dialog.newMessageText = dialog
        this._callSubscriber(this)
    }
}

//@ts-ignore
window.store=store