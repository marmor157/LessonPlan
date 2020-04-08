import React, { Component } from "react";
import InputErrors from "./InputErrors";

export class StyledInput extends Component {
  render() {
    const { onChange, label, errors, ...rest } = this.props;
    return (
      <div className={`styledInput ${errors ? "hasErrors" : ""}`}>
        <label>{label}</label>
        <input {...rest} onChange={onChange} />
        <InputErrors errors={errors} />
      </div>
    );
  }
}

export default StyledInput;
