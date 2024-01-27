import {state, addDialog, addMessage, addPost, updateNewPostText, updateNewMessageText, updateNewDialogText} from './redux/State'
import { rerender } from './index-rerender'


rerender(state, addDialog, addMessage, addPost, updateNewPostText, updateNewMessageText, updateNewDialogText)

// обходим возможность циклического замыкания при встречном импорте из State и index, добавляя файл-посредник index-rerender
// теперь index-rerender копируется в оба файла, а index не копируется в State
// State и index передают в index-rerender state в качестве параметра, а не импорта