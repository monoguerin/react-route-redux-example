import React from 'react'
import { render } from 'react-dom';
import Main from './components/containers/Main';
import MainAbout from './components/containers/MainAbout';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/app.scss';
import initialData from './config/initialState.json';
import rootReducer from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
//import { Route, IndexRoute, Switch } from 'react-router';
import { Switch, Route } from 'react-router-dom'
import { connectRouter, routerMiddleware, ConnectedRouter} from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialData,
  compose(
    applyMiddleware(middleware),
  ),
);

render(<Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={MainAbout} />
            <Route render={() => (<div>404</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('react-container'));
