import React from 'react'
import {addPostAC} from '../../../redux/ProfileReducer'
import {TextareaWithButton, TextForm} from '../../common/textareaWithButton/TextareaWithButton'
import s from './MyPosts.module.css'
import {PostsContainer} from './MyPostsContainer'
import {Post} from './post/Post'

export const MyPosts = ({ profile, dispatch }: PostsContainer) => {
	const addPost = (formData: TextForm) => dispatch(addPostAC(formData.addPost))

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
