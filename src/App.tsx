import React from 'react'
import './App.css'
import {Header} from './components/header/Header';
import {NAVBar} from './components/navbar/NavBar';
import {Profile} from './components/profile/Profile';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NAVBar/>
            <Profile/>
        </div>
    )
}

export default App
