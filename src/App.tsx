import React, {FC} from 'react'
import './App.css'
import {Header} from './components/header/Header';
import {NavBar} from './components/navbar/NavBar';
import {Profile} from './components/_profile/Profile';
import {Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {UsersContainer} from './components/_users/UsersContainer';
import {SettingsContainer} from './components/settings/SettingsContainer';

export const App: FC = () => {

    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="mainContent">
                    <Route path="/profile" render={() => <Profile />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />}/>
                    <Route path="/news" component={() => <News/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={SettingsContainer}/>
                    <Route path="/2-samurai-way-main" render={() => <Profile />}/>
                    <Route exact path="/"  render={() => <Profile />}/>
                </div>
            </div>
    )
}

export default App