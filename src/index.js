import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import reducers from './reducers';
import Login from './containers/Login';

let store = createStore(reducers, {
  isAuthenticated: localStorage.getItem('auth_token')
});

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
