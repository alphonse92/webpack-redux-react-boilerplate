export default class Input {

  constructor(name, component, validators) { Object.assign(this, { name, component, validators }) }
  getComponent = () => this.component
  getValidators = () => this.validators
  getName = () => this.name
  getErrors = () => this.errors;
  addError = (err) => this.errors.push(err);
  isValid = (formData) => {
    const self = this;
    const name = self.getName();
    const value = formData[name];
    self.errors = [];
    const isValid = self.getValidators()
      .reduce((isValid, validator) => {
        const currentValidationStatus = validator.isValid(name, formData, value)
        if (!currentValidationStatus) self.addError({ message: validator.getMessage(self.getName(), value), value })
        return isValid && currentValidationStatus;
      }, true);
    return isValid;
  }
}