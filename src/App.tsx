import { Login } from "components/login/Login"
import React, { FC } from "react"
import "./App.css"
import { NavBar } from "./components/navbar/NavBar"
import { Redirect, Route, Switch } from "react-router-dom"
import { News } from "./components/news/News"
import { Music } from "./components/music/Music"
import { DialogsContainer } from "./components/dialogs/DialogsContainer"
import { UsersContainer } from "./components/users/UsersContainer"
import { SettingsContainer } from "./components/settings/SettingsContainer"
import { ProfileContainer } from "./components/profile/ProfileContainer"
import { Error404 } from "./components/error404/Error404"
import { HeaderContainer } from "./components/header/HeaderContainer"

export const App: FC = () => {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<NavBar />
			<div className="mainContent">
				<Switch>
					<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
					<Route path="/dialogs" render={() => <DialogsContainer />} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/news" component={() => <News />} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={SettingsContainer} />
					<Route path="/2-samurai-way-main#" render={() => <Redirect to="/profile" />} />
					<Route path="/login" render={() => <Login />} />
					<Route path="/error404" render={() => <Error404 />} />
					<Route path="/" exact render={() => <Redirect to="/profile" />} />
					<Route path="/*" render={() => <Redirect to="/error404" />} />
				</Switch>
			</div>
		</div>
	)
}

export default App
