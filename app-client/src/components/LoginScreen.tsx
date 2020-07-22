import React, { useState } from "react";

import { useForm } from "../hooks/useForm";

import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";
import { ICredentials } from "../constants/Session.constans";

interface Props {
  isAuthenticated: boolean;
  userSigninRequest: (values: ICredentials) => void;
}

export const LoginScreen = ({ isAuthenticated, userSigninRequest }: Props) => {
  const [values, handleChange] = useForm({ username: "", password: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    userSigninRequest(values);
  };

  return (
    <div
      className={`loginScreen ${isAuthenticated ? "loginScreen--hide" : ""}`}
    >
      <div className="loginScreen__container">
        <h2>Sign in</h2>
        <form onSubmit={onSubmit}>
          <StyledInput
            label="Username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <StyledInput
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <StyledButton text="Sign in" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
