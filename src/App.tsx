import React, {FC} from 'react'
import './App.css'
import {Header} from './components/header/Header';
import {NavBar} from './components/navbar/NavBar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {StoreActionType, StateReduxType} from './redux/Store-Redux';
import {Dispatch} from 'redux';

type AppPropsType = {
    state: StateReduxType
    dispatch:  Dispatch<StoreActionType>
}
export const App: FC<AppPropsType> = ({state, dispatch}) => {

    return(
    <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className="mainContent">
            <Route path="/profile"
                   render={() => <Profile profile={state.profile}
                                          dispatch={dispatch}/>}/>
            <Route path="/dialogs"
                   render={() => <Dialogs dialog={state.dialogs}
                                          dispatch={dispatch}/>}/>
            <Route path="/news" component={() => <News/>}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/2-samurai-way-main"
                   render={() => <Profile profile={state.profile}
                                          dispatch={dispatch}/>}/>
            <Route exact path="/"
                   render={() => <Profile profile={state.profile}
                                          dispatch={dispatch}/>}/>
            {/*<Route  path="*" render={() => <div style={{*/}
            {/*    fontSize: '75px', fontWeight: '900', fontStyle: 'italic',*/}
            {/*    color: 'red', maxWidth: '250px', margin: '12vh auto 0'*/}
            {/*}}>Error404</div>}/>*/}
        </div>
    </div>
    )}

export default App