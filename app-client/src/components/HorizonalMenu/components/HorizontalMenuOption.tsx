import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import "./HorizontalMenuOption.scss";

interface Props {
  text: string;
  faIconName: IconProp;
  onClick?: () => void;
}

const HorizontalMenuOption = React.memo(
  ({ text, faIconName, onClick }: Props) => {
    return (
      <div className="horizontalMenu__option" onClick={onClick}>
        <FontAwesomeIcon icon={faIconName} size="lg" />
      </div>
    );
  }
);

export default HorizontalMenuOption;
