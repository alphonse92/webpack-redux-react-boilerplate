import React from 'react';
import { Builder, InputValidators, InputComponent } from './input/'
import ReactObserver from 'react-event-observer';

class FormComponent extends React.Component {
  /**
   * Static methods
   */
  static Input = InputComponent;
  static InputBuilderHelper = Builder
  static Validators = InputValidators
  static createObserver() {
    const name = Date.now().toString();
    const observer = ReactObserver();
    const wrapper = {
      observer,
      subscribe(fn) {
        return this.observer.subscribe(name, fn);
      },
      unsubscribe() {
        return this.observer.unsubscribe();
      },
      publish(data) {
        return this.observer.publish(name, data);
      },
    }

    return wrapper;
  }

  /**
   * Class methods
   */
  inputs = [];
  onInputChangeListener = null;

  constructor(props) {
    super(props);
    this.inputs = props.inputs;
    this.inputs = this.inputs || []; //Avoid reference error;
    this.inputs = Array.isArray(this.inputs) ? this.inputs : [this.inputs] // formalice array
    this.state = {
      is_valid: false,
      form: {}
    }
  }
  isFormValid = () => {
    const currentState = this.state;
  
    let errors = [];
    const is_valid = !this.inputs.length ?
      true :
      this.inputs.reduce((out, input) => {
        const isValid = typeof input.isValid === 'function' ? input.isValid : () => true;
        const isInputValid = isValid(currentState.form);
        if (!isInputValid)
          errors = errors.concat(input.getErrors());
        const is_valid = out && isInputValid
        return is_valid
      }, true)
    return { is_valid, errors };
  }

  handleInputChange = (event) => {
    const { name, value } = event;
    const onChangeEvent = this.props.onChange;

    this.setState((previousState, currentProps) => {
      const newState = { ...previousState }
      newState.form[name] = value;
      onChangeEvent(newState)
      return newState;
    })
  }

  handleSubmit = (event) => {
    if (this.props.preventDefault) event.preventDefault();
    const submitEvent = this.props.onSubmit
    const isFormValid = this.isFormValid;
    this.setState((previousState, currentProps) => {
      const newState = { ...previousState };
      const validation = isFormValid(newState);
      newState.is_valid = validation.is_valid;
      submitEvent(Object.assign(newState, { errors: validation.errors }))
    })
  }
  subscribeToChanges = () => {
    this.unsubscribeToChanges();
    this.onInputChangeListener = this.props.onChangeObserver.subscribe(this.handleInputChange)
  }
  unsubscribeToChanges = () => {
    if (this.onInputChangeListener) this.onInputChangeListener.unsubscribe()
  }


  componentWillUnmount = () => this.unsubscribeToChanges()
  render = () => {
    this.subscribeToChanges();
    const formAttributes = { onSubmit: this.handleSubmit };
    if (this.props.method) formAttributes.method = this.props.method
    if (this.props.action) formAttributes.action = this.props.action
    return (<form {...formAttributes}> {this.props.children} </form >);
  }



}

export default FormComponent;

// {
//   this.inputs.map((input, index) => {
//     const component = input.component;
//     component.key = input.name;
//     component.name = input.name;
//     component.onChange = this.handleInputChange
//     return component;
//   })
// }