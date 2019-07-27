import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { carsApp, initialState } from './cars/reducers/carsApp';
import { loadState, saveState } from './cars/datasource/localStorage';
import { App } from './App';

const favourites = loadState();

const store = createStore(carsApp, { ...initialState, ...favourites }, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  saveState({
    favourites: store.getState().favourites
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
