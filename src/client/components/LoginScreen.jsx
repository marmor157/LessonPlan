import React, { Component } from "react";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="loginScreen">
        <div className="loginScreen__container">
          <h2>Sign in</h2>
          <form onSubmit={this.onSubmit}>
            <StyledInput
              label="Login"
              type="text"
              name="login"
              value={this.state.login}
              onChange={this.onChange}
            />
            <StyledInput
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <StyledButton text="Sign in" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
