import React from "react";

import FormInput from "components/Form/FormInput";
import Button from "components/Button";

import {signInWithGoogle} from "firebase/firebase.util";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  submitSignInForm = event =>{
      event.preventDefault();
      console.log("form submitting...");
  }
  handleSignIn = event => {};

  render() {
    return (
      <div className="login-container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitSignInForm}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleInputChange}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleInputChange}
          />
          <div className="login-buttons">
            <Button type="submit" onClick={this.handleSignIn}>Sign In</Button>
            <Button type="button" onClick={signInWithGoogle} classes="sign-in-google">
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
