import React, { FC } from "react"
import preloader from "../../assets/preloader.svg"

type PreloaderPropsType = {
	style?: { [key: string]: string }
}
const setting = {
	width: "43%",
	height: "75%",
	margin: "auto",
	color: "white",
	fontSize: "50px",
	fontStyle: "italic",
	fontWeight: "900",
}
export const Preloader: FC<PreloaderPropsType> = ({ style }) => {
	return <img src={preloader} alt="LOADING..." style={{ ...setting, ...style }} />
}
