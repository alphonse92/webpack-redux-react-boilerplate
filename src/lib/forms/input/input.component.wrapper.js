import InputComponentBase from './input.component.base';
import React from 'react';

class CustomInputComponent extends InputComponentBase {

  constructor(props) {
    super(props);
    // remove control attributes from input properties
    delete this.state.children;
    delete this.state.onChangeObserver;
    delete this.state.validators;
    delete this.state.ComponentBuilder;
    //Create the DOM
    this.state.onChange = this.onChange;
    
  }

}


/**
 * @deprecated it will be removed
 */
class InputComponent extends InputComponentBase {
  constructor(props) {
    super(props);
    delete this.state.children;
    delete this.state.DOM;
    delete this.state.onChangeObserver;
  }
  render = () => React.createElement(this.props.DOM, this.state, null);
}


export {
  InputComponent,
  CustomInputComponent
}