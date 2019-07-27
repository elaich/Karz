import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { carsApp } from './cars/reducers/carsApp';
import ListViewContainer from './cars/views/ListContainer';

const store = createStore(carsApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <ListViewContainer />
  </Provider>,
  document.getElementById('root')
);
