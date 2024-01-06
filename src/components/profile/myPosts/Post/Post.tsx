import React, {FC} from 'react'
import s from './Post.module.css'
import ava from '../../../../assets/postAvatar.jpg'

type PostType = {
    message: string
    likesCount: number
}

export const Post: FC<PostType> = (props) => {
    return (
        <div className={s.post}>
            <img src={ava} alt="avatarka"/>
            {props.message}
            <div>
                <span> like {props.likesCount}</span>
            </div>
        </div>
    )
}