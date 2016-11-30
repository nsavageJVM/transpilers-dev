import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import { Router } from 'react-router';
import getRoutes from 'router/router';

import App from 'container/App';

export default ( ) => (
  <Route path="/" name="app" component={App}>
    <IndexRoute component={SimpleListComponent}/>
    <Route path="private" component={privateRoute(PrivatePage)}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logout" onEnter={onLogout}/>
  </Route>
);