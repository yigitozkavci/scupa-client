import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Login from './containers/Login';
import '../vendor/bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';

let store = createStore(reducers, {
  isAuthenticated: localStorage.getItem('auth_token')
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
