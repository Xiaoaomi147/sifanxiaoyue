import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createLogger  from 'redux-logger';
import rootReducer from '../reducers/index.js';
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
    const middlewares = [sagaMiddleware, createLogger];
    const enhancers = [
        applyMiddleware(...middlewares)
      ];
    const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers),
    );
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}