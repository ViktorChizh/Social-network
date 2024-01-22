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
            <img src={props.avatar} alt="avatarka"/>
            {props.message}
            <div>
                <span> like {props.likesCount}</span>
            </div>
        </div>
    )
}