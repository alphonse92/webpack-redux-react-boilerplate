import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from './about.page';
const Routes = [
  <Route key="about.routes./about" path="/about" exact component={AboutPage} />
]
export default Routes;