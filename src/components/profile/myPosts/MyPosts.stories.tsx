import React from "react"
import { Provider } from "react-redux"
import { store } from "redux/_Store-Redux"
import { MyPostsContainer } from "./MyPostsContainer"

export default {
	title: "profile/myPosts/MyPosts",
	component: MyPostsContainer,
}

export const MyPostDemo = () => {
	return (
		<Provider store={store}>
			<MyPostsContainer />
		</Provider>
	)
}
