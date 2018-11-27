import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../lib/modal/modal.component';
import ModalDefaultWindow from '../../lib/modal/windows/default/default.component';
import Login from '../forms/login/login.form.component';
import style from './styles.sass'

const component = (props) => {
  const conf = { ...props, title: 'Login' }
  return (
    <Modal close={props.close}>
      <ModalDefaultWindow conf={{ ...conf }}>
        <Login />
        <button onClick={props.close}>Close </button>
      </ModalDefaultWindow>
    </Modal >
  );
}


// component.propTypes = {
//   routes: PropTypes.array.isRequired
// }

export default component;