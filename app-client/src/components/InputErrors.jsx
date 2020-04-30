import React from "react";

export default function InputErrors(props) {
  if (props.errors)
    return props.errors.map((error, index) => {
      return (
        <div className="inputError" key={index}>
          {error}
        </div>
      );
    });
  else return null;
}
