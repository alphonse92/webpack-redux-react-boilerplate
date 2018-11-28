import React from 'react';
import Wrapper from './input.component.wrapper';
import Input from './input.class';
const inputDom = "input"
const FormInputBuilder = (DOM = inputDom, name, InputProps, validators, onChangeObserver) => {
  InputProps.name = name;

  InputProps.onChangeObserver = InputProps.onChangeObserver || onChangeObserver;

  InputProps.validators = InputProps.validators || validators;
  InputProps.validators = Array.isArray(InputProps.validators) ? InputProps.validators : [InputProps.validators];

  InputProps.DOM = DOM
  const component = (
    <Wrapper {...InputProps} />
  )
  return new Input(name,
    component,
    InputProps.validators
  );
};

const InputBoxBuilder = (name, InputProps = { type: "text" }, validators = () => true, onChangeObserver) => {
  InputProps.validators = validators;
  InputProps.onChangeObserver = onChangeObserver
  return FormInputBuilder(inputDom, name, InputProps);
};

const CustomFormElementBuilder = (DomComponentBuilder) => {

}

export {
  FormInputBuilder,
  InputBoxBuilder,
  CustomFormElementBuilder
}