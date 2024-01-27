import React, {FC} from 'react'
import s from './Post.module.css'


export type PostType = {
    id: number
    message: string
    likesCount: number
    avatar: string
}

export const Post: FC<PostType> = (props) => {
    return (
        <div className={s.post} key={props.id}>
            <div className={s.ava}>
                <img src={props.avatar} alt="avatarka"/>
                <span> like {props.likesCount}</span>
            </div>
            {props.message}
        </div>
    )
}