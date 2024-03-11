import React, {FC, useEffect} from 'react'
import s from './Settings.module.css'
import {PageSizeSetting} from '../pageSizeSettings/PageSizeSetting';

type SettingsPropsType = {
    pageSize: number
    setPageSize: (pageSize: number) => void
}
export const Settings: FC<SettingsPropsType> = ({pageSize, setPageSize}) => {
    useEffect(() => {
        setTimeout( ()=>{
            document.title = 'SocialNetwork - settings'
        }, 500)})
    return (
        <div className={s.main}>
            <PageSizeSetting pageSize={pageSize} setPageSize={setPageSize}/>
        </div>
    )
} 