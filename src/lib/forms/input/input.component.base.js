import React from 'react';
import PropTypes from 'prop-types';
class InputComponentBase extends React.Component {

  children = React.Fragment;
  constructor(props) {
    super(props);

    if (!this.props.name) throw new Error("name is required");
    if (!this.props.onChangeObserver) throw new Error("onChangeObserver is required");
    if (!this.props.ComponentBuilder) throw new Error("ComponentBuilder is required");

    this.state = { ...props, onChange: this.onChange };
  }

  // subscribeToFormChanges = () => this.props.onChangeObserver.subscribe(this.onFormChange);
  onFormChange = (event) => {

  }

  extractValueFromEvent = (event) => event.target.value;
  publishDataToObserver = (value) => {
    const name = this.state.name;
    const data = { name, value };
    this.props.onChangeObserver.publish(data)
  }
  onChange = (event) => {
    if (this.props.onChange) {
      event.persist()
      this.props.onChange.bind(this)(event, this.publishDataToObserver)
    }
    return this.props.onChangeObserver.publish({ name: this.props.name, value: this.extractValueFromEvent(event) });
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
    const DOM = this.props.ComponentBuilder(this.state)
    return (<React.Fragment>{DOM}</React.Fragment>)
  }
}
InputComponentBase.propTypes = {
  onChangeObserver: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  ComponentBuilder: PropTypes.func,
}
export default InputComponentBase;