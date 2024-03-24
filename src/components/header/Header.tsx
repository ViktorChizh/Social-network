import React, {FC} from 'react'
import s from './Header.module.css'
import logo from '../../assets/logo.jpg'
import {AuthType} from '../../redux/AuthReducer';
import {LoginBlock} from './loginBlock/LoginBlock';

export type PropsType = {
    isAuth: boolean
    login: string | null
    ownUserAvatar: string | null
    isPreloading: boolean

    setAuthUserData: (data: AuthType, ownUserAvatar: string | null) => void
    setPreloader: (isPreloader: boolean) => void
}

export const Header: FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.lightgreenBlock}></div>
            <h1> Social Network </h1>
            <LoginBlock {...props}/>
        </header>
    )
}

