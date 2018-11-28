import React from 'react';
import FormComponent from '../../../lib/forms/form.component'

class LoginFormComponent extends React.Component {

  onChangeObserver = null;
  inputs = {};
  constructor(props) {
    super(props)
    this.createObserver();
    this.createInputs();
    this.createFormComponentProperties();

  }
  createObserver = () => {
    this.onChangeObserver = new FormComponent.createObserver();
  }

  createInputs = () => {
    // example of input texts and password
    const username = FormComponent.InputBuilder("username", { type: 'text' }, FormComponent.Validators.required, this.onChangeObserver);
    const password = FormComponent.InputBuilder("password", { type: 'password' }, FormComponent.Validators.required, this.onChangeObserver);
    // example of checkbox
    const chk1 = FormComponent.InputBuilder("chk1", { type: 'checkbox' }, FormComponent.Validators.required, this.onChangeObserver);
    const chk2 = FormComponent.InputBuilder("chk2", { type: 'checkbox' }, FormComponent.Validators.required, this.onChangeObserver);
    // example of input groups, note the validator
    const radio1 = FormComponent.InputBuilder("radio", { type: 'radio', value: "radio1" }, FormComponent.Validators.requiredByName, this.onChangeObserver);
    const radio2 = FormComponent.InputBuilder("radio", { type: 'radio', value: "radio2" }, FormComponent.Validators.requiredByName, this.onChangeObserver);
    // example of file inputs
    const file = FormComponent.InputBuilder("file", { type: 'file' }, FormComponent.Validators.required, this.onChangeObserver);
    // example of date inputs
    const date = FormComponent.InputBuilder("date", { type: 'date' }, FormComponent.Validators.required, this.onChangeObserver);

    // Add all inputs in the input object
    this.inputs = {
      username,
      password,
      chk1,
      chk2,
      radio1,
      radio2,
      file,
      date,
    };
  }

  createFormComponentProperties = () => {
    // properties of FormComponent component
    this.FormComponentProperties = {
      onSubmit: this.onSubmit,
      inputs: Object.keys(this.inputs).map(key => this.inputs[key]),
      onChangeObserver: this.onChangeObserver,
      onChange: this.onChange,
      preventDefault: true
    }
  }

  onChange = (data) => {
    console.log("login form onchange", data);
  }
  onSubmit = (data) => {
    console.log("form submited", data)
  }

  componentWillUnmount = () => { this.onChangeObserver.unsubscribe() }
  render = () => {
    // Virtual DOM template
    const loginComponent = (
      <FormComponent {...this.FormComponentProperties}>
        {this.inputs.username.getComponent()} <br></br>
        {this.inputs.password.getComponent()}<br></br>
        {this.inputs.chk1.getComponent()} chk1<br></br>
        {this.inputs.chk2.getComponent()} chk2<br></br>
        {this.inputs.radio1.getComponent()} radio1<br></br>
        {this.inputs.radio2.getComponent()} radio2<br></br>
        {this.inputs.file.getComponent()}<br></br>
        {this.inputs.date.getComponent()}<br></br>
        <button>Submit</button>
      </FormComponent>);

    //render the DOM
    return loginComponent;
  }
}

export default LoginFormComponent