import React from 'react';
import FormComponent from '../../../lib/forms/form.component'

class LoginFormComponent extends React.Component {

  onChangeObserver = null;

  constructor(props) {
    super(props)
    this.onChangeObserver = new FormComponent.createObserver();
  }
  onChange = (data) => {
    console.log("login form onchange", data);
  }
  onSubmit = (data) => {
    console.log("form submited", data)
  }

  componentWillUnmount = () => { this.onChangeObserver.unsubscribe() }
  render = () => {
    const username = FormComponent.InputBuilder("username", { type: 'text' }, FormComponent.Validators.required, this.onChangeObserver);
    const password = FormComponent.InputBuilder("password", { type: 'password' }, FormComponent.Validators.required, this.onChangeObserver);
    const chk1 = FormComponent.InputBuilder("chk1", { type: 'checkbox' }, FormComponent.Validators.required, this.onChangeObserver);
    const chk2 = FormComponent.InputBuilder("chk2", { type: 'checkbox' }, FormComponent.Validators.required, this.onChangeObserver);
    const radio1 = FormComponent.InputBuilder("radio", { type: 'radio', value: "radio1" }, FormComponent.Validators.required, this.onChangeObserver);
    const radio2 = FormComponent.InputBuilder("radio", { type: 'radio', value: "radio2" }, FormComponent.Validators.required, this.onChangeObserver);
    const file = FormComponent.InputBuilder("file", { type: 'file' }, FormComponent.Validators.required, this.onChangeObserver);
    const date = FormComponent.InputBuilder("date", { type: 'date' }, FormComponent.Validators.required, this.onChangeObserver);
    
    const inputs = [
      username,
      password
    ];


    const properties = {
      onSubmit: this.onSubmit,
      inputs: inputs,
      onChangeObserver: this.onChangeObserver,
      onChange: this.onChange,
      preventDefault: true
    }

    const loginComponent = (
      <FormComponent {...properties}>
        {username.getComponent()} <br></br>
        {password.getComponent()}<br></br>
        {chk1.getComponent()} chk1<br></br>
        {chk2.getComponent()} chk2<br></br>
        {radio1.getComponent()} radio1<br></br>
        {radio2.getComponent()} radio2<br></br>
        {file.getComponent()}<br></br>
        {date.getComponent()}<br></br>
        <button>Submit</button>
      </FormComponent>);

    return loginComponent;
  }
}

export default LoginFormComponent