import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Gran titulo</h1>
        <p>Lore ipsum asd asd...</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn moress  alejandrio</Link>
      </div>
    );
  }
}

export default HomePage;