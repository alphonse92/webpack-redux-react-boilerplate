import React from 'react';
import { CustomInputComponent } from './input.component.wrapper';
import Input from './input.class';

const FormInputBuilder = (InputProps) => {
  InputProps.validators = InputProps.validators ? InputProps.validators : [] //avoid reference error
  InputProps.validators = Array.isArray(InputProps.validators) ? InputProps.validators : [InputProps.validators];
  const component = (<CustomInputComponent {...InputProps} />);
  return new Input(
    InputProps.name,
    component,
    InputProps.validators
  );
};

const InputBoxBuilder = (name, InputProps, validators, onChangeObserver) => {
  InputProps.name = name;
  InputProps.validators = validators;
  InputProps.onChangeObserver = onChangeObserver
  InputProps.ComponentBuilder = (properties) => (<input {...properties} />);
  return FormInputBuilder(InputProps);
};

const CustomFormElementBuilder = (name, InputProps, validators, onChangeObserver, ComponentBuilder) => {
  InputProps.name = name;
  InputProps.validators = validators;
  InputProps.onChangeObserver = onChangeObserver;
  InputProps.ComponentBuilder = ComponentBuilder;
  return FormInputBuilder(InputProps);
}

export {
  FormInputBuilder,
  InputBoxBuilder,
  CustomFormElementBuilder
}