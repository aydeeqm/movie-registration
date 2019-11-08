import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import homeReducer from '~redux/modules/home';

export const rootReducer = history =>
  combineReducers({
    routing: connectRouter(history),
    router: connectRouter(history),
    form: formReducer,
    movies: homeReducer,
  });

const rootEpic = combineEpics();

const epicMiddleware = createEpicMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
/* eslint-enable */

export default function configureStore(history, initialState) {
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware(history))),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
