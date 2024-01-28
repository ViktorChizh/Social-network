import React from 'react'
import './App.css'
import {Header} from './components/header/Header';
import {NavBar} from './components/navbar/NavBar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {StateType, updateNewDialogText, updateNewMessageText, updateNewPostText} from './redux/State';

type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (p: string) => void
    addMessage: () => void
    updateNewMessageText: (m: string) => void
    addDialog: () => void
    updateNewDialogText: (d: string) => void
}

function App({state, addPost, addMessage, addDialog}: AppPropsType) {
    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="mainContent">
                <Route path="/profile" render={() => <Profile profile={state.profile}
                                                              addPost={addPost}
                                                              updateNewPostText={updateNewPostText}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs dialog={state.dialog}
                                              addMessage={addMessage}
                                              updateNewMessageText={updateNewMessageText}
                                              addDialog={addDialog}
                                              updateNewDialogText={updateNewDialogText}/>}/>
                <Route path="/news" component={()=><News/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/2-samurai-way-main" render={() => <Profile profile={state.profile}
                                                                            addPost={addPost}
                                                                            updateNewPostText={updateNewPostText}/>}/>
                <Route exact path="/" render={() => <Profile profile={state.profile}
                                                                addPost={addPost}
                                                                updateNewPostText={updateNewPostText}/>}/>
            </div>
        </div>
    </BrowserRouter>
}

export default App