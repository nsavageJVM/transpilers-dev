import ReactDOM from 'react-dom';
import React from 'react'
import { render } from 'react-dom'
import App from './container/App'

ReactDOM.render(
    <Router history={history} routes={getRoutes() }/>,
    document.getElementById('app')
)
