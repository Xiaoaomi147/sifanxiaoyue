import 'core-js/fn/object/assign';
import 'babel-polyfill';
import 'babel-core/register';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './router.js';
import configureStore from './stores';
import rootSaga from './sagas';
// Render the main component into the dom
//ertrer
const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter></Provider>, document.getElementById('app'));
