import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginPage from './containers/LoginPage';
import SchoolsPage from './containers/SchoolsPage';
import '../vendor/bootstrap/dist/css/bootstrap.min.css';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';
import App from './components/App';

let store = createStore(reducers, {
  auth: {
    isAuthenticated: localStorage.getItem('auth_token')
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/schools" component={SchoolsPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
