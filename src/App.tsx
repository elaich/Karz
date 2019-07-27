import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListViewContainer from './cars/views/ListContainer';
import DetailsContainer from './cars/views/DetailsContainer';

export const App = () => (
  <Router>
    <Route path='/' exact component={ListViewContainer} />
    <Route path='/:stockNumber' component={DetailsContainer} />
  </Router>
);
