import React from 'react';
export default class Input {

  constructor(name, component, validators) { Object.assign(this, { name, component, validators }) }
  getComponent = (observer) => this.component
  getValidators = () => this.validators
  getName = () => this.name
  getErrors = () => this.errors;
  isValid = (formData) => {
    const name = this.getName();
    const value = formData[name];
    this.errors = [];
    console.log({ formData, name, value })
    const isValid = this.getValidators()
      .reduce((isValid, validator) => {
        const currentValidationStatus = validator.isValid(formData, value)
        if (!currentValidationStatus) this.errors.push({ value, message: validator.getMessage(this.getName) })
        return isValid && currentValidationStatus;
      }, true);
    return isValid;
  }
}