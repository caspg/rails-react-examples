import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middleware = routerMiddleware(browserHistory)

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(middleware)
  );
}
