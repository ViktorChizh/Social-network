import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { StateRedux } from "redux/_Store-Redux"

type MStP = {
	isAuth: boolean
}
const mapStateToProps = (state: StateRedux): MStP => ({
	isAuth: state.auth.isAuth,
})
// Т - это пропсы входящей компоненты. НЕ срабатывает в стрелочном синтаксисе, поэтому function-declaration:
export function withAuthRedirect<T>(Component: ComponentType<T>) {
	const RedirectComponent = (props: MStP) => {
		//выделяем из props isAuth, т.к. его нет во входящей компоненте и не должно быть в выходящей
		let { isAuth, ...restprops } = props
		if (!props.isAuth) return <Redirect to={"/login"} />
		return <Component {...(restprops as T)} />
	}
	// connect можно не типизировать
	let ConnectedRedirectComponent = connect<MStP, {}, unknown, StateRedux>(mapStateToProps)(RedirectComponent)

	return ConnectedRedirectComponent
}
