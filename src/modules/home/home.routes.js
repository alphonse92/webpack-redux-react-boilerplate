import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home.page';
const Routes = [
  <Route key="home.routes./" path="/" exact component={HomePage} />,
  <Route key="home.routes./home" path="/home" exact component={HomePage} />
];
export default Routes;