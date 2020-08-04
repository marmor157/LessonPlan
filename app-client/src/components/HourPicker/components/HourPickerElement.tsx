import React from "react";

import "./HourPickerElement.scss";

interface Props {
  isActive: boolean;
  text: string | number;
  onClick: (id: number) => void;
  id: number;
}

const HourPickerElement = ({ isActive, text, onClick, id }: Props) => {
  const className = isActive
    ? "hourPicker__element hourPicker__element--active"
    : "hourPicker__element";

  const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    onClick(id);
  };

  return (
    <li className={className} onClick={onClickHandler}>
      {text}
    </li>
  );
};

export default HourPickerElement;
