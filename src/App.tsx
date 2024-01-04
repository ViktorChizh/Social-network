import React from 'react'
import './App.css'
import {Header} from './components/Header';
import {NAVBar} from './components/NavBar';
import {Profile} from './components/Profile';

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
