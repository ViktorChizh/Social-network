import React from 'react'
import s from './Music.module.css'

export const Music = () => {

    return (
        <div className={s.main}>
            <a className={s.block}
               href="https://101.ru/radio/channel/24"
               target="_blanc">
                <img
                    src="https://cdn2.101.ru/proxy/vardata/modules/channel/image/8176b78a2460ef4f63aa1907a3b46099.jpg?w=300&h=300&pos=center&t=1669111592"
                    alt="Relax FM"/>
                Радио Relax FM
            </a>
            <a className={s.block}
               href="https://101.ru/radio/channel/173"
               target="_blanc">
                <img
                    src="https://cdn0.101.ru/proxy/vardata/modules/channel/image/18e59e661597a41b54918781ff5f292e.png?w=300&h=300&pos=center&t=1574857944"
                    alt="Deep House"/>
                Радио Deep House
            </a>
            <a className={s.block}
               href="https://101.ru/radio/channel/175"
               target="_blanc">
                <img
                    src="https://cdn2.101.ru/proxy/vardata/modules/channel/image/8700bf0eb42cee25219de44034753570.jpg?w=300&h=300&pos=center&t=1669797633"
                    alt="sputnik BELARUS"/>
                Радио Enigma
            </a>
            <a className={s.block}
               href="https://101.ru/radio/channel/105"
               target="_blanc">
                <img
                    src="https://cdn2.101.ru/proxy/vardata/modules/channel/image/7eeb2f4860de4a03bdcf6dc195088df2.png?w=300&h=300&pos=center&t=1565608474"
                    alt="Depeche Mode"/>
                Радио Depeche Mode
            </a>
        </div>

    )
} 