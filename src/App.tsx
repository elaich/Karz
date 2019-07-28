import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import ListViewContainer from './cars/views/ListContainer';
import DetailsContainer from './cars/views/DetailsContainer';
import { NotFound } from './cars/views/NotFound';
import { Header } from './cars/components/common/Header';
import { Footer } from './cars/components/common/Footer';

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={ListViewContainer} />
      <Route path='/_404' component={NotFound} />
      <Route path='/:stockNumber' component={DetailsContainer} />
    </Switch>
    <Footer />
  </Router>
);
