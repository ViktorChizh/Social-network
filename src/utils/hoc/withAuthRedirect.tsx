import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { StateReduxType } from "redux/_Store-Redux"

type MStPType = {
	isAuth: boolean
}
const mapStateToProps = (state: StateReduxType): MStPType => ({
	isAuth: state.auth.isAuth,
})
// Т - это пропсы входящей компоненты. НЕ срабатывает в стрелочном синтаксисе, поэтому function-declaration:
export function withAuthRedirect<T>(Component: ComponentType<T>) {
	const RedirectComponent = (props: MStPType) => {
		//выделяем из props isAuth, т.к. его нет во входящей компоненте и не должно быть в выходящей
		let { isAuth, ...restprops } = props
		if (!props.isAuth) return <Redirect to={"/login"} />
		return <Component {...(restprops as T)} />
	}
	// connect можно не типизировать
	let ConnectedRedirectComponent = connect<MStPType, {}, unknown, StateReduxType>(mapStateToProps)(RedirectComponent)

	return ConnectedRedirectComponent
}
