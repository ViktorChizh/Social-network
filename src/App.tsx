import React, {FC} from 'react'
import './App.css'
import {Header} from './components/header/Header';
import {NavBar} from './components/navbar/NavBar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {StoreType} from './redux/Store';

type AppPropsType = {
    store: StoreType
}
export const App: FC<AppPropsType> = ({store}) => {
    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="mainContent">
                <Route path="/profile" render={() => <Profile profile={store.getState().profile}
                                                              addPost={store.addPost.bind(store)}
                                                              updateNewPostText={store.updateNewPostText.bind(store)}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs dialog={store.getState().dialog}
                                              addMessage={store.addMessage.bind(store)}
                                              updateNewMessageText={store.updateNewMessageText.bind(store)}
                                              addDialog={store.addDialog.bind(store)}
                                              updateNewDialogText={store.updateNewDialogText.bind(store)}/>}/>
                <Route path="/news" component={() => <News/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/2-samurai-way-main" render={() => <Profile profile={store.getState().profile}
                                                                         addPost={store.addPost.bind(store)}
                                                                         updateNewPostText={store.updateNewPostText.bind(store)}/>}/>
                <Route exact path="/" render={() => <Profile profile={store.getState().profile}
                                                             addPost={store.addPost.bind(store)}
                                                             updateNewPostText={store.updateNewPostText.bind(store)}/>}/>
            </div>
        </div>
    </BrowserRouter>
}

export default App