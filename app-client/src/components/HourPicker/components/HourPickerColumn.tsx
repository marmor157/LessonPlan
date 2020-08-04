import React, { useRef, useEffect, Children } from "react";

import "./HourPickerColumn.scss";
import HourPickerElement from "./HourPickerElement";

interface Props {
  possibleValues: Array<number | string>;
  actualValueIndex: number;
  changeActual: (newValue: number) => void;
}

const HourPickerColumn = ({
  possibleValues,
  actualValueIndex,
  changeActual,
}: Props) => {
  const SCROLL_TREHSHOLD = 20;

  const onScroll = (e: React.WheelEvent<HTMLUListElement>) => {
    let change = 0;
    let newPosition = actualValueIndex;

    if (e.deltaY > SCROLL_TREHSHOLD) change = -1;
    else if (e.deltaY < -SCROLL_TREHSHOLD) change = 1;

    if (newPosition + change > possibleValues.length) newPosition = 0;
    else if (newPosition + change < 0) newPosition = possibleValues.length - 1;
    else newPosition += change;

    changeActual(newPosition);
  };

  const onClick = (id: number) => {
    changeActual(id);
  };

  //Setting value from which to start displaying elements in column
  let currentElement =
    actualValueIndex - 2 < 0
      ? possibleValues.length + (actualValueIndex - 2)
      : actualValueIndex - 2;

  let elements = [];
  for (let i = 0; i < 5; i++) {
    //Middle element should have active class
    elements.push(
      <HourPickerElement
        isActive={i == 2}
        text={possibleValues[currentElement]}
        id={currentElement}
        key={i}
        onClick={onClick}
      />
    );

    if (currentElement + 1 >= possibleValues.length) currentElement = 0;
    else currentElement++;
  }

  return (
    <div className="hourPicker__column">
      <ul
        className="hourPicker__list"
        draggable={true}
        onWheel={(e) => onScroll(e)}
      >
        {elements}
      </ul>
    </div>
  );
};

export default HourPickerColumn;
