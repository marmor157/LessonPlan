import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class HorizontalMenuOption extends PureComponent {
  render() {
    const { text, faIconName, onClick } = this.props;
    return (
      <div className="horizontalMenu__option" onClick={onClick}>
        <FontAwesomeIcon icon={faIconName} size="lg" />
      </div>
    );
  }
}
