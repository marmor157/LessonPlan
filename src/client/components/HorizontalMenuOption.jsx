import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class HorizontalMenuOption extends PureComponent {
  render() {
    const { text, faIconName } = this.props;
    return (
      <div className="horizontalMenu__option">
        <div className="horizontalMenu__option__text">{text}</div>
        <div className="horizontalMenu__option__icon">
          <FontAwesomeIcon icon={faIconName} />
        </div>
      </div>
    );
  }
}
