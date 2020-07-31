import React, { Component } from "react";
import InputErrors from "./components/InputErrors";

import "./StyledInput.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errors?: Array<string>;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = ({
  label,
  errors,
  onChange,
  ...rest
}: Props): JSX.Element => {
  return (
    <div className={`styledInput ${errors ? "hasErrors" : ""}`}>
      <label>{label}</label>
      <input {...rest} onChange={onChange} />
      <InputErrors errors={errors} />
    </div>
  );
};

export default StyledInput;
