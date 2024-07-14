import React from "react"
import s from "./Music.module.css"

type MusicBase = {
	radioTitle: string
	radioLink: string
	imgLink: string
}

const musicBase: MusicBase[] = [
	{
		radioTitle: "Радио Relax FM",
		radioLink: "https://101.ru/radio/channel/24",
		imgLink:
			"https://cdn2.101.ru/proxy/vardata/modules/channel/image/8176b78a2460ef4f63aa1907a3b46099.jpg?w=300&h=300&pos=center&t=1669111592",
	},
	{
		radioTitle: "Радио Deep House",
		radioLink: "https://101.ru/radio/channel/173",
		imgLink:
			"https://cdn0.101.ru/proxy/vardata/modules/channel/image/18e59e661597a41b54918781ff5f292e.png?w=300&h=300&pos=center&t=1574857944",
	},
	{
		radioTitle: "Радио Enigma",
		radioLink: "https://101.ru/radio/channel/175",
		imgLink:
			"https://cdn2.101.ru/proxy/vardata/modules/channel/image/8700bf0eb42cee25219de44034753570.jpg?w=300&h=300&pos=center&t=1669797633",
	},
	{
		radioTitle: "Радио Depeche Mode",
		radioLink: "https://101.ru/radio/channel/105",
		imgLink:
			"https://cdn2.101.ru/proxy/vardata/modules/channel/image/7eeb2f4860de4a03bdcf6dc195088df2.png?w=300&h=300&pos=center&t=1565608474",
	},
]

const Music = () => {
	document.title = "SocialNetwork - music"
	return (
		<div className={s.main}>
			{musicBase.map((e) => {
				return (
					<a className={s.block} href={e.radioLink} target="_blanc" key={e.radioTitle}>
						<img src={e.imgLink} alt={e.radioTitle} />
						{e.radioTitle}
					</a>
				)
			})}
		</div>
	)
}

export default Music
