import React, { FC } from "react"
import s from "./MyPosts.module.css"
import { Post } from "./post/Post"
import { TextareaWithButton } from "../../textareaWithButton/TextareaWithButton"
import { addPostAC, updateNewPostTextAC } from "../../../redux/ProfileReducer"
import { MyPostsContainerType } from "./MyPostsContainer"

export const MyPosts: FC<MyPostsContainerType> = ({ profile, dispatch }) => {
	return (
		<div className={s.myPosts}>
			<span>My posts</span>
			{profile.posts.map((i) => (
				<Post key={i.id} post={i} />
			))}
			<TextareaWithButton
				buttonName="ADD POST"
				newText={profile.newPostText}
				dispatch={dispatch}
				addAC={addPostAC}
				newTextAC={updateNewPostTextAC}
			/>
		</div>
	)
}
