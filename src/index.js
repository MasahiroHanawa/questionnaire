import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import Survey from './components/Pages/Survey';
import createHistory from 'history/createBrowserHistory';
import finalCreateStore from './stores/store';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const store = finalCreateStore();
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Survey} />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
