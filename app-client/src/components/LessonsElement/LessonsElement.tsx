import React from "react";

import "./LessonsElement.scss";

interface Props {
  upperText: string;
  bottomText?: string;
}

export const LessonsElement = ({ upperText, bottomText }: Props) => {
  return (
    <div className="lessonsElement">
      {upperText}
      <br />
      {bottomText}
    </div>
  );
};

export default LessonsElement;
