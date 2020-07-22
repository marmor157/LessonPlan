import React, { Component } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const StyledButton = ({
  text = "Button",
  className,
  ...rest
}: Props): JSX.Element => {
  return (
    <button className={`styledButton ${className}`} {...rest}>
      {text}
    </button>
  );
};

export default StyledButton;
