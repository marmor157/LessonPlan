import React, { Component } from "react";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSigninRequest(this.state);
  }

  render() {
    const { isAuthenticated } = this.props.session;
    return (
      <div
        className={`loginScreen ${isAuthenticated ? "loginScreen--hide" : ""}`}
      >
        <div className="loginScreen__container">
          <h2>Sign in</h2>
          <form onSubmit={this.onSubmit}>
            <StyledInput
              label="Username"
              type="text"
              name="username"
              value={this.state.username}
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
