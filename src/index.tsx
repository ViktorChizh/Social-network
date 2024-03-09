import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {store} from './redux/Store-Redux'
import {Provider} from 'react-redux';

export const rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    )
}
rerender()

store.subscribe(() => rerender()) // сразу колбеком закидываем ререндер в _Store и подменяем метод заглушку