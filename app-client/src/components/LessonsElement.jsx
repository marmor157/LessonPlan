import React from "react";

export default function LessonsElement(props) {
  const { upperText, bottomText } = props;
  return (
    <div className="lessonsElement">
      {upperText}
      <br />
      {bottomText}
    </div>
  );
}
