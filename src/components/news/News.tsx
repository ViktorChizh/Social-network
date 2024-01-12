import React from 'react'
import s from './News.module.css'

export const News = () => {

    return (
        <div className={s.main}>
            <a className={s.block}
               href="https://belta.by/"
               target="_blanc">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="belta"/>
                БЕЛТА
            </a>
            <a className={s.block}
               href="https://dzen.ru/news/region/belarus?issue_tld=ru&utm_referrer=www.google.com"
               target="_blanc">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivqHEwHXUAC9GrU93e4712tY7LV34MU_RN7zixLuXkXm4jdfxzUxMDbS5EBNJr3bfF3U&usqp=CAU"
                    alt="yandex"/>
                Яндекс новости
            </a>
            <a className={s.block}
               href="https://smartpress.by/"
               target="_blanc">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="smartpress"/>
                Смартпресс
            </a>
            <a className={s.block}
               href="https://sputnik.by/"
               target="_blanc">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="sputnik BELARUS"/>
                Спутник Беларусь
            </a>
        </div>

    )
} 