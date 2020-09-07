import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';

import Game from '../pages/Game';
import List from '../pages/List';
import Login from '../pages/Login';

const Navigation = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Game} />
      <Route exact path="/list" component={List} />
    </Switch>
  </ConnectedRouter>
);

export default Navigation;
