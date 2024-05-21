import React, { FC } from "react"
import s from "./MyPosts.module.css"
import { Post } from "./post/Post"
import { TextareaWithButton, TextFormType } from "../../common/textareaWithButton/TextareaWithButton"
import { addPostAC } from "../../../redux/ProfileReducer"
import { MyPostsContainerType } from "./MyPostsContainer"

export const MyPosts: FC<MyPostsContainerType> = ({ profile, dispatch }) => {
	const addPost = (formData: TextFormType) => dispatch(addPostAC(formData.addPost))

	return (
		<div className={s.myPosts}>
			<span>My posts</span>
			{profile.posts.map((i) => (
				<Post key={i.id} post={i} />
			))}
			<TextareaWithButton buttonName="ADD POST" onSubmit={addPost} placeholder="addPost" name="addPost" />
		</div>
	)
}
