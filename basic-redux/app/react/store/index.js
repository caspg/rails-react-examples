import { createStore, applyMiddleware } from 'redux';

import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    DevTools.instrument()
  );
}
