import React, {FC, memo} from 'react';
import s from './LoginBlock.module.css';
import {NavLink} from 'react-router-dom';
import {PropsType} from '../header/Header';
import {Preloader} from '../preloader/Preloader';

export const LoginBlock: FC<PropsType> = (props) => {

    return (
        <div className={s.loginBlock}>
            {props.isPreloading && !props.login
                ? <Preloader style={{width:"100%"}}/>
                : props.isAuth
                    ? <div className={s.login}>
                        <img src={props.ownUserAvatar || ''} alt=""/>
                        <p>{props.login}</p>
                    </div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>
            }


        </div>
    )
}