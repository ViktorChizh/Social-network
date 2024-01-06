import React from 'react'
import './App.css'
import {Header} from './components/header/Header';
import {NAVBar} from './components/navbar/NavBar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <NAVBar />
            <div className='mainContent'>
                {/*<Profile />*/}
                <Dialogs />
            </div>
        </div>
    )
}

export default App
