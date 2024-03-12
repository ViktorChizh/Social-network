import React, {FC} from 'react'
import preloader from '../../assets/ball-triangle.svg'

type PreloaderPropsType = {
    width: string
    height: string
    style?: {[key: string]: string}
}

export const Preloader: FC<PreloaderPropsType> = ({width, height, style}) => {
    return <img src={preloader} alt="LOADING..." width={width} height={height} style={style}/>
} 