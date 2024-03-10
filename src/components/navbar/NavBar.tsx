import React from 'react'
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </nav>
    )
}