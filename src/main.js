import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootreducer from './combineReducer';
import logger from 'redux-logger'
import App from './App';
let store = createStore(
  rootreducer,
  applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));