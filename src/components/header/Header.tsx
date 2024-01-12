import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/logo.jpg'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt='logo'/>
        </header>
    )
}