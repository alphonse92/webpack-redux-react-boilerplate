import React from 'react';
import PropTypes from 'prop-types';
class InputComponentBase extends React.Component {
  inputProps = {};
  children = React.Fragment;
  constructor(props) {
    super(props);

    if (!this.props.onChangeObserver) throw new Error("onChangeObserver is required");
    if (!this.props.name) throw new Error("name is required");

    this.state = {}
    this.inputProps = { ...props, onChange: this.onChange };

    // deleting wrapper properties

    delete this.inputProps.children;
    delete this.inputProps.DOM;
    delete this.inputProps.onChangeObserver;
  }

  // subscribeToFormChanges = () => this.props.onChangeObserver.subscribe(this.onFormChange);
  onFormChange = (event) => {

  }
  extractValueFromEvent = (event) => event.target.value;
  onChange = (event) => {
    const data = {
      name: event.target.name
    };

    if (this.props.onChange) data.value = this.props.onChange(event);
    else data.value = this.extractValueFromEvent(event);
    console.log("publish", data)
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

  render = () => <React.Fragment></React.Fragment>;
}
InputComponentBase.propTypes = {
  onChangeObserver: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}
export default InputComponentBase;