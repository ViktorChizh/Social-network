import { Redirect, Route, Switch, withRouter } from "react-router-dom"
import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { compose } from "redux"

import { StateReduxType } from "redux/_Store-Redux"
import { checkInitialize } from "redux/AuthReducer"
import { withSuspense } from "utils/hoc/withSuspense"
import "app/App.css"

import { Preloader } from "components/common/preloader/Preloader"
import { Error404 } from "components/error404/Error404"
import { NavBar } from "components/navbar/NavBar"
import { ProfileContainer } from "components/profile/ProfileContainer"
import { HeaderContainer } from "components/header/HeaderContainer"
import { LoginContainer } from "components/login/LoginContainer"

const SettingsContainer = React.lazy(() => import("components/settings/SettingsContainer"))
const DialogsContainer = React.lazy(() => import("components/dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("components/users/UsersContainer"))
const Music = React.lazy(() => import("components/music/Music"))
const News = React.lazy(() => import("components/news/News"))

class App extends React.Component<mStPType & mDtPType> {
	catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
		alert(promiseRejectionEvent.reason || "some error occured")
	}
	componentDidMount() {
		if (this.props.isAuth === false) {
			this.props.checkInitialize()
		}
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}

	render() {
		if (!this.props.isAuth) return <Preloader />

		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<NavBar />
				<div className="mainContent">
					<Switch>
						<Route path="/2-samurai-way-main#" render={() => <Redirect to="/profile" />} />
						<Route path="/login" render={() => <LoginContainer />} />
						<Route path="/error404" render={() => <Error404 />} />
						<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
						<Route path="/settings" component={() => withSuspense(SettingsContainer)} />
						<Route path="/dialogs" render={() => withSuspense(DialogsContainer)} />
						<Route path="/users" render={() => withSuspense(UsersContainer)} />
						<Route path="/music" render={() => withSuspense(Music)} />
						<Route path="/news" component={() => withSuspense(News)} />
						<Route path="/" exact render={() => <Redirect to="/profile" />} />s
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
