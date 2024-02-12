import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {StateReduxType, store} from './redux/Store-Redux'

export const rerender = (state: StateReduxType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root')
    )
}

rerender(store.getState())

store.subscribe(() => {
    rerender(store.getState())
}) // сразу колбеком закидываем ререндер в _Store и подменяем метод заглушку