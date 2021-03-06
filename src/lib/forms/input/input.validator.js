import InputValidator from './input.validator.class';
export default {
  optional: new InputValidator("This field is optional This message never will be showed", () => true),
  required: new InputValidator("This field is required", (name, formData, value) => !!value),
  requiredByName: new InputValidator("This field is required", (name, formData, value) => !!formData[name]),
}