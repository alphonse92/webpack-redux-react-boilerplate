import React from 'react';
import InputComponent from './input.component';
import Input from './input.class';

const FormInputBuilder = (ComponentClass = InputComponent, name, InputProps = { type: "text" }, Validators = () => true, onChangeObserver) => {
  if (!name) throw new Error("name input is required");
  Validators = Array.isArray(Validators) ? Validators : [Validators];
  InputProps.name = name;
  InputProps.onChangeObserver = onChangeObserver;
  InputProps.validators = Validators;
  const component = (
    <ComponentClass {...InputProps} />
  )
  return new Input(name,
    component,
    Validators
  );
};

const InputBoxBuilder = (name, InputProps = { type: "text" }, Validators = () => true, onChangeObserver) => {
  return FormInputBuilder(InputComponent, name, InputProps, Validators, onChangeObserver);
};

export {
  FormInputBuilder,
  InputBoxBuilder
}