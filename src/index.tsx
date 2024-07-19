import React from "react"
import ReactDOM from "react-dom"
import App from "app/App"
import { store } from "./redux/_Store-Redux"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
// GitHubPages uncorrect working with BrowserRouter
ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById("root"),
)
