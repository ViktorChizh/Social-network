import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {state} from './redux/State'

ReactDOM.render(<App state={state}/>,document.getElementById('root'));