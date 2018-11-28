import InputComponentBase from './input.component.base';
import React from 'react';

class CustomInputComponent extends InputComponentBase {
  constructor(props) {
    super(props);

    // remove control attributes from input properties
    delete this.inputProps.children;
    delete this.inputProps.onChangeObserver;
    delete this.inputProps.validators;
    delete this.inputProps.ComponentBuilder;
    //Create the DOM
    this.DOM = this.props.ComponentBuilder(this.inputProps)
  }
  //render the dom
  render = () => <React.Fragment>{this.DOM}</React.Fragment>
}


/**
 * @deprecated it will be removed
 */
class InputComponent extends InputComponentBase {
  constructor(props) {
    super(props);
    delete this.inputProps.children;
    delete this.inputProps.DOM;
    delete this.inputProps.onChangeObserver;
  }
  render = () => React.createElement(this.props.DOM, this.inputProps, null);
}


export {
  InputComponent,
  CustomInputComponent
}