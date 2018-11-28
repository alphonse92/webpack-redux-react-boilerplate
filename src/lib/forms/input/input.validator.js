import InputValidator from './input.validator.class';
export default {
  required: new InputValidator("This field is required", (name, formData, value) => !!value),
  requiredByName: new InputValidator("This field is required", (name, formData, value) => !!formData[name]),

}