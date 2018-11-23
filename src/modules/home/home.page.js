import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/modal.component';

class HomePage extends React.Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1 className="hola">Gran titulo</h1>
        <p>Lore ipsum asd asd...</p>
        <Link to="about" className="btn btn-primary btn-lg">Login</Link>
        <Modal>inner modal</Modal>
      </div>
    );
  }
}

export default HomePage;