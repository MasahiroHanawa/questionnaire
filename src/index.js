import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import Survey from './components/Pages/Survey'
import Result from './components/Pages/Result'
import createHistory from 'history/createBrowserHistory'
import finalCreateStore from './stores/store'
import registerServiceWorker from './registerServiceWorker'
import './css/index.scss'
import './css/survey.scss'
import './css/result.scss'

const store = finalCreateStore()
const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Survey} />
        <Route path="/survey/:id" component={Survey} />
        <Route path="/result/" component={Result} />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
)
registerServiceWorker()
