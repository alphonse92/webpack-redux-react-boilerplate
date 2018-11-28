import React from 'react';
import InputComponent from './input.component';
import Input from './input.class';

export default (name, InputProps = { type: "text" }, Validators = () => true, onChangeObserver) => {
  if (!name) throw new Exception("name input is required");
  Validators = Array.isArray(Validators) ? Validators : [Validators];
  InputProps.name = name;
  InputProps.onChangeObserver = onChangeObserver;
  InputProps.validators = Validators;
  const component = (
    <InputComponent {...InputProps}></InputComponent>
  )
  return new Input(name,
    component,
    Validators
  );
};