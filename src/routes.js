import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './redux/store';
import App from './App';
import { HomeView, CategoriesContainer } from './modules';

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeView} />
      <Route path="/categories/:name" component={CategoriesContainer} />
    </Route>
  </Router>
);
