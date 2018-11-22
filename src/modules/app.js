
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.routes}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  routes: PropTypes.array.isRequired
}


export default App;