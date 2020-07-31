import React from "react";

import "./InputErrors.scss";

interface Props {
  errors: Array<string>;
}

export const InputErrors = (props: Props): JSX.Element => {
  if (props.errors)
    return (
      <>
        {props.errors.map((error, index) => {
          return (
            <div className="inputError" key={index}>
              {error}
            </div>
          );
        })}
      </>
    );
  else return null;
};

export default InputErrors;
