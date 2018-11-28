import React from 'react';
import PropTypes from 'prop-types';
class InputComponentBase extends React.Component {
  inputProps = {};
  children = React.Fragment;
  constructor(props) {
    super(props);

    if (!this.props.name) throw new Error("name is required");
    if (!this.props.onChangeObserver) throw new Error("onChangeObserver is required");
    if (!this.props.ComponentBuilder) throw new Error("ComponentBuilder is required");
    this.state = this.props.initState || {};
    this.inputProps = { ...props, onChange: this.onChange };
  }

  // subscribeToFormChanges = () => this.props.onChangeObserver.subscribe(this.onFormChange);
  onFormChange = (event) => {

  }
  extractValueFromEvent = (event) => event.target.value;
  onChange = (event) => {
    const self = this
    const data = { name: event.target.name };
    // if user set a onChange function, then wrap it, execute and store the returned value
    if (self.props.onChange) data.value = self.props.onChange(event);
    // else extract the data from event
    else data.value = self.extractValueFromEvent(event);
    // send data to observer
    self.props.onChangeObserver.publish(data)
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
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  ComponentBuilder: PropTypes.func,
  initState: PropTypes.object
}
export default InputComponentBase;