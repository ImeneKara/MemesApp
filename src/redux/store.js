import { applyMiddleware, compose, createStore, combineReducers } from 'redux';

import { reducer as profileReducer } from '../redux/profile';
import { reducer as editorReducer } from '../redux/editor';
import { reducer as memesReducer } from '../redux/memes';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/root';

const createReducer = () => combineReducers({
  profile: profileReducer,
 editor: editorReducer,
 memes: memesReducer
});

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
  ];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}; 