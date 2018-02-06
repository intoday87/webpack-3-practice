/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from '../component/redux-react-sample/reducers';
import CounterApp from '../component/redux-react-sample';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = createStore(
  reducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const rootElem = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <CounterApp store={store} />,
    rootElem
  );
};

render();
store.subscribe(render);
