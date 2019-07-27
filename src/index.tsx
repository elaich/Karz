import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { carsApp } from './cars/reducers/carsApp';
import ListViewContainer from './cars/views/ListContainer';
import DetailsContainer from './cars/views/DetailsContainer';

const store = createStore(carsApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <DetailsContainer stockNumber={57705} />
  </Provider>,
  document.getElementById('root')
);
