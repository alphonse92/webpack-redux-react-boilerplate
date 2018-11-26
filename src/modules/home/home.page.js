import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../../components/modals/login.modal.component';
import Empty from '../../lib/empty/empty.component';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    }
  }
  handleShowModal = () => this.setState((previousState, currentProps) => { return { ...previousState, showModal: true } });
  handleHiddenModal = () => this.setState((previousState, currentProps) => { return { ...previousState, showModal: false } });
  // getModal = ()=>
  render() {
    return (
      <div className='jumbotron'>
        <h1 className="hola">Gran titulo</h1>
        <p>Lore ipsum asd asd...</p>
        <Link to="about" className="btn btn-primary btn-lg">Login</Link>
        <button onClick={this.handleShowModal}>Show modal</button>
        {this.state.showModal ? <LoginModal close={this.handleHiddenModal} /> : <Empty />}
      </div>
    );
  }
}

export default HomePage;