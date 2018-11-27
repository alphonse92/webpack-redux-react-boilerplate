import React from 'react';
export default class InputComponent extends React.Component {
  inputProps = {}
  children = <></>
  constructor(props) {
    super(props);
    this.state = {}
    this.inputProps = { ...props };
    // deleting no input properties 
    delete this.inputProps.children;
    delete this.inputProps.onChangeObserver;
  }
  // subscribeToFormChanges = () => this.props.onChangeObserver.subscribe(this.onFormChange);
  onFormChange = (event) => {

  }
  onChange = (event) => {
    const { name, value } = event.target;
    const data = { name, value }
    this.props.onChangeObserver.publish(data)
  };

  isValid = (formData) => {
    const value = formData[this.getName()];
    this.errors = [];
    const isValid = this.getValidators()
      .reduce((isValid, validator) => {
        const currentValidationStatus = validator.isValid(formData, value)
        if (!currentValidationStatus) this.errors.push({ value, message: validator.getMessage(this.getName) })
        return isValid && currentValidationStatus;
      }, true);
    return isValid;
  }


  render = () => {
    return (<input {...this.inputProps} onChange={this.onChange} />)
  }
}