// import PropTypes from 'prop-types';

import React from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './modules/app';
import PropTypes from 'prop-types';


const browserHistory = createBrowserHistory();

class Bootstrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Router history={browserHistory}>
          <React.Fragment>
            <App routes={this.props.routes} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

Bootstrap.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Bootstrap;