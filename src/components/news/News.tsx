import React from "react"
import s from "./News.module.css"

type NewsBaseType = {
	newsTitle: string
	newsLink: string
	imgLink: string
	imgAlt: string
}

const newsBase: NewsBaseType[] = [
	{
		newsTitle: "Яндекс новости",
		newsLink: "https://dzen.ru/news/region/belarus?issue_tld=ru&utm_referrer=www.google.com",
		imgLink:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivqHEwHXUAC9GrU93e4712tY7LV34MU_RN7zixLuXkXm4jdfxzUxMDbS5EBNJr3bfF3U&usqp=CAU",
		imgAlt: "yandex",
	},
	{
		newsTitle: "Смартпресс",
		newsLink: "https://smartpress.by/",
		imgLink:
			"data:image/jpeg;base64,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",
		imgAlt: "smartpress",
	},
	{
		newsTitle: "Спутник Беларусь",
		newsLink: "https://sputnik.by/",
		imgLink:
			"data:image/jpeg;base64,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",
		imgAlt: "sputnik BELARUS",
	},
]

export const News = () => {
	document.title = "SocialNetwork - news"
	return (
		<div className={s.main}>
			{newsBase.map((e) => {
				return (
					<a className={s.block} href={e.newsLink} target="_blanc" key={e.newsTitle}>
						<img src={e.imgLink} alt={e.imgAlt} />
						{e.newsTitle}
					</a>
				)
			})}
		</div>
	)
}
