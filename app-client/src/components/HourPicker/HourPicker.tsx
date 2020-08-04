import React, { useState } from "react";
import HourPickerColumn from "./components/HourPickerColumn";

import "./HourPicker.scss";

interface Props {}

const HourPicker = (props: Props) => {
  const [actualIndex, setActualIndex] = useState(0);

  return (
    <div className="hourPicker">
      <HourPickerColumn
        possibleValues={["tak", "nie", "moze"]}
        actualValueIndex={actualIndex}
        changeActual={(newValue: number): void => {
          setActualIndex(newValue);
        }}
      />
    </div>
  );
};

export default HourPicker;
