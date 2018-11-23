import React from 'react';
import { Link } from 'react-router-dom';

import style from './modal.style.css';
import sass from './modal.component.sass'

class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <link rel="stylesheet" href="/modal-component.css"></link> */}
        <p className={style.hola}>red</p>
        <p className={sass.hola2}>blue</p>
      </React.Fragment >
    );
  }
}

export default Modal;