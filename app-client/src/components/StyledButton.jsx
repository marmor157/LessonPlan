import React, { Component } from "react";

export default class StyledButton extends Component {
  render() {
    const { text = "Button", className = "", ...rest } = this.props;
    return (
      <button className={`styledButton ${className}`} {...rest}>
        {text}
      </button>
    );
  }
}
