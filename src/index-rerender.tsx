import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {StateType} from './redux/State';


export const rerender = (state: StateType,
                         addDialog: ()=>void,
                         addMessage: ()=>void,
                         addPost: ()=>void,
                         updateNewPostText: (s: string)=>void,
                         updateNewMessageText: (s: string)=>void,
                         updateNewDialogText: (s: string)=>void) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updateNewMessageText={updateNewMessageText}
             addDialog={addDialog}
             updateNewDialogText={updateNewDialogText}/>
        ,document.getElementById('root')
    )
}


