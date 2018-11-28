import InputComponentBase from './input.component.base';
import React from 'react';

export default class InputComponent extends InputComponentBase {
  constructor(props) {
    super(props);
  }
  
  
  render = () => {
    const DOM = this.props.DOM;
    if (typeof DOM === "string")
      return React.createElement(DOM, this.inputProps, null);
  };
}