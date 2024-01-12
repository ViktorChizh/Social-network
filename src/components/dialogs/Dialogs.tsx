import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <span>Dialogs</span>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/1' activeClassName={s.active}>User1</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/2' activeClassName={s.active}>User2</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/3' activeClassName={s.active}>User3</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/4' activeClassName={s.active}>User4</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/5' activeClassName={s.active}>User5</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/6' activeClassName={s.active}>User6</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/7' activeClassName={s.active}>User7</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>Yow</div>
                    <div className={s.message}>Hello</div>
                </div>
            </div>
    )
} 