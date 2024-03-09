import {DialogItemProps} from '../components/dialogs/dialogItem/DialogItem';
import {MessageType} from '../components/dialogs/message/Message';
import ava from '../assets/postAvatar.jpg';
import {PostType} from '../components/_profile/myPosts/post/Post';

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

export const _State: StateType = {
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
                message:
                    'It\'s my first post',
                likesCount:
                    7,
                avatar:
                ava
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
}

export const addPost = () => {
    let newPost: PostType = {
        id: _State.profile.posts[_State.profile.posts.length - 1].id + 1,
        message: _State.profile.newPostText,
        likesCount: 0,
        avatar: ava
    }
    _State.profile.posts.push(newPost)
    _State.profile.newPostText= ''
    rerender(_State, addDialog, addMessage, addPost, updateNewPostText, updateNewMessageText, updateNewDialogText)
}

export const updateNewPostText = (post: string) => {
    _State.profile.newPostText= post
    rerender(_State, addDialog, addMessage, addPost, updateNewPostText, updateNewMessageText, updateNewDialogText)
}

export const addMessage = () => {
    let newMessage: MessageType = {
        id: _State.dialog.messages[_State.dialog.messages.length - 1].id + 1,
        message: _State.dialog.newMessageText
    }
    _State.dialog.messages.push(newMessage)
    _State.dialog.newMessageText= ''
    rerender(_State, addDialog, addMessage, addPost, updateNewPostText, updateNewMessageText, updateNewDialogText)
}

export const updateNewDialogText = (message: string) => {
    _State.dialog.newDialogText= message
    rerender(_State, addDialog, addMessage, addPost, updateNewPostText, updateNewMessageText, updateNewDialogText)
}

export const addDialog = () => {
    let newDialog: DialogItemProps = {
        id: _State.dialog.dialogs[_State.dialog.dialogs.length - 1].id + 1,
        name: _State.dialog.newDialogText
    }
    _State.dialog.dialogs.push(newDialog)
    _State.dialog.newDialogText = ''
    rerender(_State, addDialog, addMessage, addPost, updateNewPostText, updateNewMessageText, updateNewDialogText)
}

export const updateNewMessageText = (dialog: string) => {
    _State.dialog.newMessageText = dialog
    rerender(_State, addDialog, addMessage, addPost, updateNewPostText, updateNewMessageText, updateNewDialogText)
}

let rerender = (state: StateType,
                addDialog: () => void,
                addMessage: () => void,
                addPost: () => void,
                updateNewPostText: (s: string) => void,
                updateNewMessageText: (s: string) => void,
                updateNewDialogText: (s: string) => void) => {
    // stub function: временная пустая функция заглушка - нужна, чтобы всё скомпилилось при запуске
}

export const subscriber = (observer: (state: StateType,
                                      addDialog: () => void,
                                      addMessage: () => void,
                                      addPost: () => void,
                                      updateNewPostText: (s: string) => void,
                                      updateNewMessageText: (s: string) => void,
                                      updateNewDialogText: (s: string) => void)=>void) => {
    rerender = observer
} // подменяем заглушку на настоящую ререндер, которую передаем как колбек из индекс.тсх, а не импортируем
// теперь в стэйт ничего не импортируется из индекс.тсх и нет циклической ошибки.
// ОТКАЗЫВАЕМСЯ от промежуточного файла index-rerender.ts