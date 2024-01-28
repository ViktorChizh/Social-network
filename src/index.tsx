import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store, StoreType } from './redux/Store'

export const rerender = (store: StoreType) => {
    ReactDOM.render(<App store={store}/>, document.getElementById('root')
    )
}

rerender(store)

store.subscriber(rerender) // сразу колбеком закидываем ререндер в store и подменяем метод заглушку