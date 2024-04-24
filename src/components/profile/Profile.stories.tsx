import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "redux/_Store-Redux"
import { ProfileContainer } from "./ProfileContainer"

export default {
	title: "Profile",
	component: ProfileContainer,
}

export const ProfileDemo = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ProfileContainer />
			</BrowserRouter>
		</Provider>
	)
}
