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
import {StateType} from './redux/State';

type AppPropsType = {
    state: StateType
}

function App ({state}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="mainContent">
                    <Route path='/profile' render={()=><Profile profile={state.profile}/>}/>
                    <Route path='/dialogs' component={()=><Dialogs dialog={state.dialog}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/2-samurai-way-main' component={()=><Profile profile={state.profile}/>}/>
                    <Route exact path='/' component={()=><Profile profile={state.profile}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App