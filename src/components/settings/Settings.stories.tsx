import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "redux/_Store-Redux"
import SettingsContainer from "./SettingsContainer"

export default {
	title: "Settings",
	component: SettingsContainer,
}

export const SettingsDemo = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<SettingsContainer />
			</BrowserRouter>
		</Provider>
	)
}
