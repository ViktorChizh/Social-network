import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "redux/_Store-Redux"
import { HeaderContainer } from "./HeaderContainer"

export default {
	title: "Header",
	component: HeaderContainer,
}

export const HeaderDemo = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<HeaderContainer />
			</BrowserRouter>
		</Provider>
	)
}
