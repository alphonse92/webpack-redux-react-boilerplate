import React from 'react';
export default class InputValidator {
  constructor(message, validator) {
    if (!message) throw new Exception("InputValidator message is required");
    validator = typeof validator === "function" ? validator : () => true
    Object.assign(this, { message, validator })
  }
  isValid = (formData, value) => this.validator(formData, value)
  getMessage = (inputName) => inputName ? `[${inputName}]: ${this.message}` : this.message;
}
