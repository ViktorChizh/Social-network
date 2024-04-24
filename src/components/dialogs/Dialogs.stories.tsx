import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "redux/_Store-Redux"
import { DialogsContainer } from "./DialogsContainer"

export default {
	title: "Dialogs",
	component: DialogsContainer,
}

export const DialogsDemo = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<DialogsContainer />
			</BrowserRouter>
		</Provider>
	)
}
