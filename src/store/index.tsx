import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import 'regenerator-runtime/runtime';

import createRootReducer from './rootReducer';

export const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  createRootReducer(history),
  composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
      ),
    )
  );
