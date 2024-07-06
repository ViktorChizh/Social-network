import preloader from 'assets/preloader.svg'
import React from 'react'

type PreloaderProps = {
	style?: { [key: string]: string }
}
const setting = {
	color: "#b1e5e7",
	fontSize: "50px",
	fontStyle: "italic",
	fontWeight: "900",
	lineHeight: "2",
	margin: "0 auto",
	width: "50vw",
}
export const Preloader= ({ style }: PreloaderProps) => {
	return <img src={preloader} alt="LOADING..." style={{ ...setting, ...style }} />
}
