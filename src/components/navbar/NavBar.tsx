import React from 'react'
import s from './NavBar.module.css'

export const NAVBar = () => {
    return (
        <nav className={s.navBar}>
                <a href='/'>Profile</a>
                <a href='/'>Message</a>
                <a href='/'>News</a>
                <a href='/'>Music</a>
                <a href='/'>Settings</a>
        </nav>
    )
}