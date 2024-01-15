import React from 'react'
import { NavBar } from './NavBar';
import { BrowserRouter } from 'react-router-dom';

export default {
    component: NavBar
}

export const NavBarDemo = () => {
    return (
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    )
}