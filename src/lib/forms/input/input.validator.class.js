import React from 'react';
export default class InputValidator {
  constructor(message, validator) {
    if (!message) throw new Error("InputValidator message is required");
    validator = typeof validator === "function" ? validator : () => true
    Object.assign(this, { message, validator })
  }
  isValid = (name,formData, value) => this.validator(name,formData, value)
  getMessage = (inputName, value) => inputName ? `[${inputName}]: ${this.message} got: ${value}` : this.message;
}
