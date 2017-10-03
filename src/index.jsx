import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import seed from './seed';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import { productsReducer } from './reducers/products_reducer';

import Home from './components/home';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  products: seed,
};

const reducers = combineReducers({
  products: productsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    </Router>
  </Provider>,
  document.querySelector('.root')
);
