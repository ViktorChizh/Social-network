import { DialogsContainer } from "components/dialogs/DialogsContainer"
import { Error404 } from "components/error404/Error404"
import { HeaderContainer } from "components/header/HeaderContainer"
import { LoginContainer } from "components/login/LoginContainer"
import { Music } from "components/music/Music"
import { NavBar } from "components/navbar/NavBar"
import { News } from "components/news/News"
import { Preloader } from "components/common/preloader/Preloader"
import { ProfileContainer } from "components/profile/ProfileContainer"
import { SettingsContainer } from "components/settings/SettingsContainer"
import { UsersContainer } from "components/users/UsersContainer"
import React, { ComponentType } from "react"
import "app/App.css"
import { connect } from "react-redux"
import { Redirect, Route, Switch, withRouter } from "react-router-dom"
import { compose } from "redux"
import { StateReduxType } from "redux/_Store-Redux"
import { checkInitialize } from "redux/AuthReducer"

class App extends React.Component<mStPType & mDtPType> {
	componentDidMount() {
		if (this.props.isAuth === false) {
			this.props.checkInitialize()
		}
	}
	render() {
		if (!this.props.isAuth) return <Preloader />

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
						<Route path="/login" render={() => <LoginContainer />} />
						<Route path="/error404" render={() => <Error404 />} />
						<Route path="/" exact render={() => <Redirect to="/profile" />} />
						<Route path="/*" render={() => <Redirect to="/error404" />} />
					</Switch>
				</div>
			</div>
		)
	}
}

type mStPType = {
	isAuth: boolean
}
type mDtPType = {
	checkInitialize: () => void
}
const MapStateToProps = (state: StateReduxType): mStPType => ({
	isAuth: state.auth.isAuth,
})

export default compose<ComponentType>(
	withRouter,
	connect<mStPType, mDtPType, unknown, StateReduxType>(MapStateToProps, { checkInitialize }),
)(App)
