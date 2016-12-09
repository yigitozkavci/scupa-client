import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as ReactRedux from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import School from './School/container';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';
import App from './components/App';
import Auth from './Auth/container';

// let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/schools" component={School} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
