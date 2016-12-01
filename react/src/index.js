import ReactDOM from 'react-dom';
import React from 'react'
import { Router } from 'react-router';
import getRoutes from 'router/router';
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory} routes={getRoutes() }/>,
    document.getElementById('app')
)
