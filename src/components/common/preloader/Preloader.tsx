import React, { FC } from "react"
import preloader from "assets/preloader.svg"

type PreloaderPropsType = {
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
export const Preloader: FC<PreloaderPropsType> = ({ style }) => {
	return <img src={preloader} alt="LOADING..." style={{ ...setting, ...style }} />
}
