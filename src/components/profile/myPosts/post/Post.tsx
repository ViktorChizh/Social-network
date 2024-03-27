import React, {FC} from 'react'
import s from './Post.module.css'

export const Post: FC<PostPropsType> = (props) => {
    return (
        <div className={s.post}>
            <div className={s.ava}>
                <img src={props.post.avatar} alt="avatarka"/>
                <span> like {props.post.likesCount}</span>
            </div>
            {props.post.message}
        </div>
    )
}
//types
export type PostType = {
    id: number
    message: string
    likesCount: number
    avatar: string
}
type PostPropsType = {
    post: PostType
}