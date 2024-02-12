import React, {useEffect} from 'react'
import s from './Settings.module.css'

export const Settings = () => {
    useEffect(() => {
        setTimeout( ()=>{
            document.title = 'SocialNetwork - settings'
        }, 500)})
    return (
        <div className={s.main}>
            Settings
        </div>
    )
} 