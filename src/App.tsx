import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

import ListViewContainer from './cars/views/ListContainer';
import DetailsContainer from './cars/views/DetailsContainer';
import { Header } from './cars/components/common/Header';
import { Footer } from './cars/components/common/Footer';

export const App = () => (
  <Router>
    <Header />
    <Route path='/' exact component={ListViewContainer} />
    <Route path='/:stockNumber' component={DetailsContainer} />
    <Footer />
  </Router>
);
